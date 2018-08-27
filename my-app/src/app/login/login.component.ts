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

  constructor(private router:Router,private form:FormsModule, private mongo:MongoService,private fs:FileSystemService) { }

  ngOnInit() {

    if (typeof(Storage) !== "undefined"){
      console.log("found")
    }
  }

  loginUser(event){
    event.preventDefault();
    this.fs.see_users(this.username).subscribe(data =>{
      console.log(data)
      var result = data
      if(result.success == true){
        localStorage.setItem("roles", result.username[0].roles)
        localStorage.setItem("username", this.username);
        this.router.navigateByUrl('/group')
        return
      }
      alert("Unkown User")
    })
    // localStorage.setItem("username", this.username);
    // this.router.navigateByUrl('/group')
  }

}
