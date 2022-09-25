import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { User } from '../../_models/user/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private baseUrl = environment.baseUrl + 'admin/users/';
  constructor(private http: HttpClient) { }

    public getAll(page: number): Observable<User[]> {
        return this.http.get<User[]>(`${this.baseUrl}?page=${page}`);
    }
    public getById(userId: number): Observable<User> {
        return this.http.get<User>(`${this.baseUrl}${userId}`);
    }
    public delete(userId: number) {
      return this.http.delete<User>(`${this.baseUrl}${userId}`);
    }
    public create(user: User) {
      return this.http.post<User>(`${this.baseUrl}`, user);
    }
}
