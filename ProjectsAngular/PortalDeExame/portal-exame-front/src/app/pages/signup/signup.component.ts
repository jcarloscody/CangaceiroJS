import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  public user = {
    username: '',
    password: '',
    firstName: '',
    lastName: '',
    email: '',
    phone: 0
  }

  constructor(private service: UserService) { }

  ngOnInit(): void {
  }

  formSubmit(){
    this.service.addUser(this.user)
      .subscribe(
        (v)=>{console.log(v)}, 
        (v)=>{console.log(v)}
      );
  }

}
