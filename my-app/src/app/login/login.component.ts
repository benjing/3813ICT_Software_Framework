import { Component, OnInit } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username:string = '';

  constructor(private router:Router,private form:FormsModule) { }

  ngOnInit() {

    if (typeof(Storage) !== "undefined"){
      console.log("found")
    }
  }

  loginUser(event){
    event.preventDefault();
    localStorage.setItem("username", this.username);
    this.router.navigateByUrl('/group')
  }

}
