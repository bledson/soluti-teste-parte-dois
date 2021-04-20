import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {CertificateService} from "./certificate.service";
import {Observable} from "rxjs";
import {LoginService} from "../login/login.service";
import {Certificate} from "../certificate";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-certificate',
  templateUrl: './certificate.component.html',
  styleUrls: ['./certificate.component.sass']
})
export class CertificateComponent implements OnInit {
  certificate: Certificate
  id = this.loginService.getUserId()
  token = this.loginService.getUserToken()
  file: File;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private certificateService: CertificateService,
    private loginService: LoginService
  ) {
  }

  ngOnInit(): void {
    this.certificateService.getCertificate(this.id, this.token).subscribe(certificate => {
        this.certificate = certificate
      }
    )
  }

  upload() {
    const formData = new FormData()
    formData.append('file', this.file)
    this.certificateService.uploadCertificate(this.id, this.token, formData).subscribe(certificate =>
      this.certificate = certificate
    )
  }

  setFile(event: any) {
    this.file = event.target.files[0];
  }
}
