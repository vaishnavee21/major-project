import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
username:any="";
password:any="";
  constructor(private router : Router ) { }

  ngOnInit() {
  }
loginUser(event){
  event.preventDefault();
  var user:string = this.username;
  var pass:string = this.password;

  if(user == "admin" && pass == "qwerty" )
  {
    this.router.navigate(['/','mainpage']);
    console.log("Login successful");
  }
  else{
    alert("Login Unsucceessful! PleaseTry Again!");
  }
}
}
