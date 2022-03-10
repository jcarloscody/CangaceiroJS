import { LoginService } from 'src/app/services/login.service';
import {  Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  isLoggedIn = false;
  user = this.loginService.getUser() || null;

  constructor(public loginService: LoginService) { }
 

  ngOnInit(): void {
    this.isLoggedIn = this.loginService.isLoggedIn();
    this.user = this.loginService.getUser();
    this.loginService.loginStatusSubject.asObservable().subscribe(data=>{
      this.isLoggedIn = this.loginService.isLoggedIn();
      this.user = this.loginService.getUser();
    })
  }

  logOut(){
    this.loginService.logout();
   // this.loginService.loginStatusSubject.next(false);
    window.location.reload()
  }


    
  }
  


