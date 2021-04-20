import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {RegisterService} from "./register.service";
import {LoginService} from "../login/login.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.sass']
})
export class RegisterComponent implements OnInit {
  form!: FormGroup

  constructor(private registerService: RegisterService,
              private loginService: LoginService,
              private formBuilder: FormBuilder,
              private router: Router) {
  }

  get name() {
    return this.form.get('name')
  }

  get cpf() {
    return this.form.get('cpf')
  }

  get phonenumber() {
    return this.form.get('phonenumber')
  }

  get email() {
    return this.form.get('email')
  }

  get birthdate() {
    return this.form.get('birthdate')
  }

  get password() {
    return this.form.get('password')
  }

  get address() {
    return this.form.get('address')
  }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      name: ['', Validators.required],
      cpf: ['', [Validators.required, Validators.minLength(11)]],
      phonenumber: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      birthdate: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(8)]],
      address: ['', Validators.required]
    })
  }

  onSubmit() {
    this.registerService.register(this.form.value).subscribe(authResponse => {
        this.loginService.saveLoggedInUser(authResponse);
        this.router.parseUrl('/certificate')
      },
      error => {
        alert("E-mail or CPF already in use")
      }
    )
  }
}
