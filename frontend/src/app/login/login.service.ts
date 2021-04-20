import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {catchError, tap} from "rxjs/operators";
import {baseUrl} from "../../environments/environment";
import {ConsoleLoggerService} from "../consoleLoggerService";
import {AuthResponse} from "../authResponse";
import {User} from "../user";

@Injectable({
  providedIn: 'root'
})
export class LoginService extends ConsoleLoggerService {
  httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json', 'Accept': 'application/json'})
  }
  private loginUrl = `${baseUrl}/api/login`

  constructor(private http: HttpClient) {
    super()
  }

  login(user: User) {
    return this.http.post<AuthResponse>(this.loginUrl, user, this.httpOptions).pipe(
      tap((authResponse: AuthResponse) => console.log(`user logged in with email=${authResponse.user.email}`)),
      catchError(this.handleError<AuthResponse>('login'))
    )
  }

  saveLoggedInUser(authResponse: AuthResponse) {
    localStorage.setItem('token', authResponse.token)
    localStorage.setItem('userId', authResponse.user.id.toString())
  }

  isUserLoggedIn() {
    return localStorage.getItem('token') !== null;
  }

  getUserId() {
    return localStorage.getItem('userId')
  }

  getUserToken() {
    return localStorage.getItem('token')
  }
}
