import { Component, OnInit } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {Router} from '@angular/router';
import {MongoService} from '../mongo.service'
import {FileSystemService} from '../file-system.service'

@Component({
  selector: 'app-group',
  templateUrl: './group.component.html',
  styleUrls: ['./group.component.css']
})
export class GroupComponent implements OnInit {

  

  constructor(private router:Router,private form:FormsModule, private mongo:MongoService,private fs:FileSystemService) { }

  ngOnInit(){
    this.fs.get_groups().subscribe(data =>{
      console.log(data)
    })
  }

  logoutUser(event){
    event.preventDefault();
    localStorage.removeItem("username");
    this.router.navigateByUrl('/login')
  }

}
