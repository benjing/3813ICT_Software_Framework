import { Component, OnInit } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {Router} from '@angular/router';
import {MongoService} from '../mongo.service'
import {FileSystemService} from '../file-system.service'

@Component({
  selector: 'app-channel',
  templateUrl: './channel.component.html',
  styleUrls: ['./channel.component.css']
})
export class ChannelComponent implements OnInit {

  isgroupadmin = false
  issuperadmin = false
  cunamefalse = false
  cuserfalse = false
  channel:any
  message_list:any
  user_list = []
  c_user_list = []
  channelusername:any
  user_name_list:any
  userOBJ:any

  constructor(private router:Router,private form:FormsModule, private mongo:MongoService,private fs:FileSystemService) { }

  //this is on load
  ngOnInit() {
    this.get_channel();
    this.getUsers()
    //checks if the logged in user is either a group user or super user
    if(localStorage.getItem("roles").includes("Group_User")){
      this.isgroupadmin = true
    }else{
      this.isgroupadmin = false
    }
    if(localStorage.getItem("roles").includes("Super_User")){
      this.issuperadmin = true
    }else{
      this.issuperadmin = false
    }
  }
  //this sends you back to group page
  back(){
    this.router.navigateByUrl('/group')
  }
  //this sends a request to the server to get all channels
  get_channel(){
    this.fs.get_channel().subscribe(channel =>{
      console.log("getting users")
      console.log(channel)
      for (var i = 0; i < channel.channels.length; i++){
        if (channel.channels[i].channel_name == localStorage.getItem("channel_name")){
          this.make_lists(channel.channels[i])
          return
        }
      }
    })
  }
  // this makes a message list
  make_lists(channel){
    this.channel = channel
    this.message_list = channel.messages
    for(var i = 0; i < channel.users.length; i++){
      this.c_user_list.push({name: channel.users[i]})
    }
    console.log(this.channel)
    console.log(this.user_list)
    console.log(this.message_list)
  }
  //add user to channel
  addUserChannel(event){
    event.preventDefault()
    console.log("Adding user to "+this.channelusername+" channel")
    this.cureset()
    if(this.channelusername == "" || this.channelusername == null){
      this.cunamefalse = true
    }else{
      if(this.user_name_list.includes(this.channelusername)){
        console.log("Adding user to "+this.channelusername+" group")
        this.fs.edit_channel(this.channelusername,localStorage.getItem("channel_name")).subscribe(channels=>{
          console.log(channels)
          this.c_user_list = []
          this.get_channel()
          this.fs.edit_group(this.channelusername,localStorage.getItem("group_name")).subscribe(groups=>{

          })
        })
        this.channelusername = ''
      }else{
        this.cuserfalse = true
      }
    }
  }
  //this resets the error stat of the channel user form
  cureset(){
    this.cunamefalse = false
    this.cuserfalse = false
  }

  // sends a request to the server to get all users then puts them in a list.
  getUsers(){
    this.fs.get_users().subscribe(users =>{
      console.log("getting users")
      console.log(users)
      this.user_list = users.users
      this.user_name_list = []
      for(var i = 0; i < users.users.length;i++){
        this.user_name_list.push(users.users[i].name)
      }
    })
  }

  //this sends a request to the server to delete a user from a channel
  delete_user_channel(users){
    console.log("deleteing "+users+" from channel "+localStorage.getItem("channel_name"))
    this.fs.delete_channel_user(localStorage.getItem("channel_name"), users).subscribe(channels=>{
      console.log(channels)
      for(var i = 0;i<this.c_user_list.length;i++){
        if (this.c_user_list[i].name == users){
          this.c_user_list.splice(i,1)
        }
      }
    })
  }
}
