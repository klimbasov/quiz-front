import { HttpClient, HttpErrorResponse, HttpHandler, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, Observable, of, Subject, tap } from 'rxjs';
import { User } from 'src/app/_models/user/user';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private baseUrl = environment.baseUrl;
  private userSubject: Subject<User> = new Subject();
  observedUser: Observable<User> = this.userSubject.asObservable();

  constructor(private httpClient: HttpClient) { }

  authenticate(username: string, password: string){
    console.log(username);
    console.log(password);
    let authString = 'Basic ' + btoa(username + ':' + password);

    const headers = new HttpHeaders({ Authorization: authString });
    this.observedUser = this.httpClient.get<User>(`${this.baseUrl}login`, { headers });
    return this.httpClient.get<User>(`${this.baseUrl}login`, { headers })
    .subscribe(
      (resp)=>{
        console.log('authenticated');
        sessionStorage.setItem('username', username);
        sessionStorage.setItem('basicauth', authString);
        this.userSubject.next(resp);
      },
      (error :HttpErrorResponse) => {
        console.log(error.message);
        alert(error.message);
      }
      );
  }

  isUserLoggedIn() {
    let user = sessionStorage.getItem('username');
    console.log(!(user === null));
    return !(user === null);
  }

  logOut() {
    sessionStorage.removeItem('username');
  }
}
