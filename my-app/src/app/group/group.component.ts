import { Component, OnInit } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {Router} from '@angular/router';

@Component({
  selector: 'app-group',
  templateUrl: './group.component.html',
  styleUrls: ['./group.component.css']
})
export class GroupComponent implements OnInit {

  constructor(private router:Router,private form:FormsModule) { }

  ngOnInit() {
  }

  logoutUser(event){
    event.preventDefault();
    localStorage.removeItem("username");
    this.router.navigateByUrl('/login')
  }

}
