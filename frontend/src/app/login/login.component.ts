import {Component, OnInit} from '@angular/core';
import {LoginService} from "./login.service";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent implements OnInit {
  form!: FormGroup;

  constructor(private service: LoginService,
              private formBuilder: FormBuilder,
              private router: Router) {
  }

  get email() {
    return this.form.get('email')
  }

  get password() {
    return this.form.get('password')
  }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]]
    })
  }

  onSubmit() {
    this.service.login(this.form.value).subscribe(authResponse => {
        this.service.saveLoggedInUser(authResponse)
        this.router.parseUrl('/certificate')
      },
      error => {
        alert("Credentials do not match")
      }
    );
  }
}
