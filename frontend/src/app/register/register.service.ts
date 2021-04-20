import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {User} from "../user";
import {catchError, tap} from "rxjs/operators";
import {baseUrl} from "../../environments/environment";
import {ConsoleLoggerService} from "../consoleLoggerService";
import {AuthResponse} from "../authResponse";

@Injectable({
  providedIn: 'root'
})
export class RegisterService extends ConsoleLoggerService {
  httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json', 'Accept': 'application/json'})
  }
  private registerUrl = `${baseUrl}/api/register`

  constructor(private http: HttpClient) {
    super()
  }

  register(user: User) {
    return this.http.post<AuthResponse>(this.registerUrl, user, this.httpOptions).pipe(
      tap((authResponse: AuthResponse) => console.log(`user registered with email=${authResponse.user.email}`)),
      catchError(this.handleError<AuthResponse>('register'))
    )
  }
}
