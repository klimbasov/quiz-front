import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { observable, Observable } from 'rxjs';
import { SimpleUser } from 'src/app/_models/simple-user';
import { environment } from 'src/environments/environment';
import { User } from '../../_models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private baseUrl = environment.baseUrl;
  constructor(private http: HttpClient) { }

  public getByName(username: string, page: number): Observable<SimpleUser[]> {
    return this.http.get<SimpleUser[]>(`${this.baseUrl}users/?partialName=${username}&page=${page}`);

  }
  public delete(userId: number) {
    return this.http.delete<User>(`${this.baseUrl}admin/users/${userId}`);
  }
  public count(): Observable<number> {
    //return this.http.get<number>(`${this.baseUrl}count`);
    return new Observable<number>((observer) => {
      observer.next(100);
    });
  }
  public update(user: User, id: number): Observable<User> {
    return this.http.patch<User>(`${this.baseUrl}admin/users/${id}`, user);
  }
}
