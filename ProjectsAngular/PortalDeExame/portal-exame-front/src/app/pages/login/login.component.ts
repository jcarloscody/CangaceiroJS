import { Router } from '@angular/router';
import { User } from './../../models/user.model';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginData = {
    username: '',
    password: ''
  }
  token: any ;

  constructor(private snackBar: MatSnackBar, private serviceLogin: LoginService, private router: Router) { }

  ngOnInit(): void {
  }

  formSubmit(){
    if(this.loginData.username.trim()=='' || this.loginData.password==null){
      this.snackBar.open("Usuário ou senha são necessários!", "Ok!",{duration: 4000})
      return;
    }

    //pegar o token
   this.serviceLogin.generateToken(this.loginData).subscribe((token: any)=>{
    this.serviceLogin.loginUser(token.token) //set do token no localstorage
    this.serviceLogin.getCurrentUser().subscribe((user: any)=>{ //pegar o dados do usuario
      this.serviceLogin.setUser(user);
      //redireciona para adm ou normal
      if (this.serviceLogin.getUserRole()=="ADMIN") {
        this.router.navigate(['/admin'])
        this.serviceLogin.loginStatusSubject.next(true);
      } else if (this.serviceLogin.getUserRole()=="GERAL"){
        this.router.navigate(['/user-dashboard']);
        this.serviceLogin.loginStatusSubject.next(true);
      } else {
        this.serviceLogin.logout()
      }

    })
   }, (e)=>{
     this.snackBar.open("Usuário ou senha são inválidos!", "Ok!",{duration: 4000})
   });
  }

}
