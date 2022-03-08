import { LoginService } from 'src/app/services/login.service';
import {  Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  username:string = '';

  constructor(public loginService: LoginService) { }
 

  ngOnInit(): void {
  }

  logOut(){
    this.loginService.logout();
    window.location.reload()
  }


    
  }
  


