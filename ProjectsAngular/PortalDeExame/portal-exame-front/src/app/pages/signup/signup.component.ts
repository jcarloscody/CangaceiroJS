import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { UserService } from 'src/app/services/user.service';
import Swal from 'sweetalert2';

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

  constructor(
      private service: UserService,
      private snackBar: MatSnackBar
  ) {

  }

  ngOnInit(): void {
  }

  formSubmit(){
    if (this.user.username == '' || this.user.username==null) {
      this.snackBar.open("o username não estar vazio!", "Ok!", {duration: 4000, horizontalPosition: 'end', verticalPosition: 'top'})
    }

    this.service.addUser(this.user)
      .subscribe(
        (v)=>{
          Swal.fire("Sucess", `${v.username}, você foi incluido no sistema!`, "success");
          this.clean();
        }, 
        (v)=>{
          this.snackBar.open("Deu erro!", "Erro!", {duration: 4000, horizontalPosition: 'end', verticalPosition: 'top'})
        }
      );
  }



  clean(){
    this.user.email = '';
    this.user.firstName = '';
    this.user.lastName = '';
    this.user.password = '';
    this.user.phone = 0;
    this.user.username = '';
  }

}
