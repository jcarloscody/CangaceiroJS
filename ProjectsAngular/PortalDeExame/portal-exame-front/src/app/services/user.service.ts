import { User } from './../models/user.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class UserService {

  baseUrl = environment.baseUrl;

  constructor(private http: HttpClient) { }

  addUser (user: User): Observable<User> {
    return this.http.post<User>(`${this.baseUrl}/user/`, user);
  }

  
}
