import {Injectable} from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {catchError, tap} from "rxjs/operators";
import {baseUrl} from "../../environments/environment";
import {Certificate} from "../certificate"
import {ConsoleLoggerService} from "../consoleLoggerService";

@Injectable({
  providedIn: 'root'
})
export class CertificateService extends ConsoleLoggerService {
  httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json', 'Accept': 'application/json'})
  }
  private certificateUrl = `${baseUrl}/api/user`

  constructor(private http: HttpClient) {
    super()
  }

  getCertificate(id: string | null, token: string | null): Observable<Certificate> {
    const url = `${this.certificateUrl}/${id}`
    this.httpOptions.headers = this.httpOptions.headers.set('Authorization', 'Bearer ' + token)
    return this.http.get<Certificate>(url, this.httpOptions).pipe(
      tap(_ => console.log(`fetched certificate for user with id=${id}`)),
      catchError(this.handleError<Certificate>(`getCertificate id=${id}`))
    )
  }

  uploadCertificate(id: string | null, token: string | null, formData: FormData) {
    const url = `${this.certificateUrl}/${id}`
    this.httpOptions.headers = this.httpOptions.headers.set('Authorization', 'Bearer ' + token)
    this.httpOptions.headers = this.httpOptions.headers.set('Content-Type', 'multipart/form-data')
    console.log(formData)
    return this.http.post<Certificate>(url, formData, this.httpOptions).pipe(
      tap(_ => console.log(`uploaded certificate for user with id=${id}`)),
      catchError(this.handleError<Certificate>(`uploadCertificate id=${id}`))
    )
  }
}
