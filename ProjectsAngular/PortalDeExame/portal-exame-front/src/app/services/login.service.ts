import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {environment} from '../../environments/environment'

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }

  public generateToken(loginData: any){
    return this.http.post(`${environment.baseUrl}/generate-token`, loginData);
  }

  public loginUser(token: any){
    localStorage.setItem('token', token)
    return true;
  }

  //se o usuari está logado ou nao
  public isLoggedIn(){
    let tokenStr = localStorage.getItem("token")
    if (tokenStr == undefined || tokenStr == '' || tokenStr==null) {
      return false;
    } else {
      return true;
    }
  }

  //remove o token do local storage
  public logout(){
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    return true;
  }

  //pegar o token
  public getToken (){
    return localStorage.getItem('token');
  }

  //set do userDetail
  public setUser(user: any){
    localStorage.setItem('user', JSON.stringify(user))
  }

  //pegar o user
  public getUser(){
    let user = localStorage.getItem('user');

    if (user != null) {
      let u = JSON.parse(user);
      return u
    } else {
      this.logout();
      return null;
    }
  }

  //pegar o perfil do user
  public getUserRole(){
    let user = this.getUser();
    return user.authorities[0].authority;
  }

  //pega o usuario atual q esta logado
  public getCurrentUser(){
    return this.http.get(`${environment.baseUrl}/current-user`)
  }

  
}
