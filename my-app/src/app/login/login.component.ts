import { Component, OnInit } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {Router} from '@angular/router';
import {MongoService} from '../mongo.service'
import {FileSystemService} from '../file-system.service'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username:string = '';
  isfalse:boolean

  constructor(private router:Router,private form:FormsModule, private mongo:MongoService,private fs:FileSystemService) { }

  ngOnInit() {
    //if browser supports storage
    if (typeof(Storage) !== "undefined"){
      console.log("found")
    }
  }
  //checks the given username agaisnt the list of known users, logs in if same name found othwise gives warning.
  loginUser(event){
    event.preventDefault();
    this.fs.check_user(this.username).subscribe(data =>{
      var result = data
      //if the response from the server is true then log in.
      if(result.success == true){
        localStorage.setItem("roles", result.username.roles)
        localStorage.setItem("username", this.username);
        this.router.navigateByUrl('/group')
        return
      }
      //otherwise if response from server is false then give error message.
      this.isfalse = true
    })
  }

}
