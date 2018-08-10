import { Component, OnInit } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  email:string = '';
  password:string = '';

  constructor(private router:Router,private form:FormsModule) { }

  ngOnInit() {
  }

  loginUser(event){
    event.preventDefault();
    if (this.email== "ben" && this.password == "123"){
      alert('You have logged in')
    }
    else{
      alert('Unautherized User!')
    }
  }

}
