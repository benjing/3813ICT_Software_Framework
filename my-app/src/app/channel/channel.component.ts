import { Component, OnInit } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {Router} from '@angular/router';
import {MongoService} from '../mongo.service'
import {FileSystemService} from '../file-system.service'
import {SocketService} from '../socket.service'

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
  username:any
  userimage:any
  message:any
  connection;
  channel_name = localStorage.getItem("channel_name")
  channel_id = localStorage.getItem("channel_id")
  imagepath:any = ''

  constructor(private router:Router,private form:FormsModule, private mongo:MongoService,private fs:FileSystemService, private socket:SocketService) { }

  //this is on load
  ngOnInit() {
    this.get_channel();
    this.getUsers()
    //checks if user is logged in
    if (!localStorage.getItem('username')){
      console.log('Not validated');
      localStorage.clear();
      alert("Not valid User")
      this.router.navigateByUrl('login');
    }else{
      //gets the username from local storage
      this.username = localStorage.getItem('username');
      console.log(this.channel_id)
      // this.socket.join({user:this.username,channel:this.channel_id});
      console.log("session started for: "+this.username);
      this.connection = this.socket.getMessages({channel:this.channel_id,user:this.username}).subscribe(message=>{
        var result = message
        console.log(result)
        this.message_list.push(message.text);
        var element = document.getElementById("cardbody")
        var scroll = document.getElementById("messagescroll");
        element.scrollTop = scroll.scrollHeight;
        this.message = '';
      })
    }
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
    this.mongo.get_channels().subscribe(channel =>{
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
    this.mongo.get_users().subscribe(users=>{
      console.log(users.users)
      for(var i = 0; i < channel.users.length; i++){
        for(var j = 0; j < users.users.length; j++){
          if (channel.users[i]==users.users[j].name){
            this.c_user_list.push(users.users[j])
          }
        }
      }
      console.log(this.channel)
      console.log(this.c_user_list)
      console.log(this.message_list)
    })
  }

  sendMessage(){
    console.log(this.message)
    for (var i = 0; i < this.user_list.length; i++){
      if (this.user_list[i].name == this.username){
        this.userimage = this.user_list[i].image
      }
    }
    //send a chat message
    if (this.imagepath == "" || this.imagepath == null){
      this.socket.sendMessage({name:this.username, userimage:this.userimage, message:this.message,image:false});
    }else{
      this.socket.sendMessage({name:this.username, userimage:this.userimage, message:this.imagepath,image:true});
    }
  }

  ngOnDestroy() {
    if (this.connection){
      this.connection.unsubscribe();
    }
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
        this.mongo.edit_channel(this.channelusername,localStorage.getItem("channel_id")).subscribe(channels=>{
          console.log(channels)
          this.mongo.edit_group(this.channelusername,localStorage.getItem("group_id")).subscribe(groups=>{
            for(var i = 0;i<this.user_list.length;i++){
              if (this.user_list[i].name == this.channelusername){
                this.c_user_list.push(this.user_list[i])
              }
            }
            this.channelusername = ''
          })
        })
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
    this.mongo.get_users().subscribe(users =>{
      console.log("getting users")
      console.log(users.users)
      this.user_list = users.users
      console.log(this.user_list)
      this.user_name_list = []
      for(var i = 0; i < users.users.length;i++){
        this.user_name_list.push(users.users[i].name)
      }
    })
  }

  //this sends a request to the server to delete a user from a channel
  delete_user_channel(usersid,usersname){
    console.log("deleteing "+usersname+" from channel "+localStorage.getItem("channel_name"))
    this.mongo.delete_channel_user(this.channel_id, usersname).subscribe(channels=>{
      console.log(channels)
      for(var i = 0;i<this.c_user_list.length;i++){
        if (this.c_user_list[i]._id == usersid){
          this.c_user_list.splice(i,1)
        }
      }
    })
  }
}
