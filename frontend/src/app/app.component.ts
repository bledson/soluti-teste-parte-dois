import {Component} from '@angular/core';
import {LoginService} from "./login/login.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'Soluti Teste Parte Dois';

  constructor(private service: LoginService) {
  }

  displayExitLink() {
    return this.service.isUserLoggedIn()
  }

  displayEntryLinks() {
    return !this.service.isUserLoggedIn()
  }
}
