import { Component, OnInit } from '@angular/core';
import { NgForm } from "@angular/forms";
import { NgbAlert } from '@ng-bootstrap/ng-bootstrap';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
 login : boolean = false;
 photo="../../assets/bg/background.jpg";
  constructor() { }

  ngOnInit(): void {
  }
  loginForm(loginData : any){
    if(loginData.username=="admin" && loginData.password=="password" || loginData.username=="Admin" && loginData.password=="Password" || loginData.username == "ADMIN" && loginData.password == "PASSWORD" ){
      this.login = true;
      window.alert("wel");
    }
    else{
      this.login = false;
    }
   
  }

}
