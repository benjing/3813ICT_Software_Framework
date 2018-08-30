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

  combined_list:any
  group_list:any
  channel_list:any
  user_list:any
  username:string = '';
  useremail:string = '';
  userrole:string = 'User';
  userroles:any
  userOBJ:any
  groupname:any
  channelname:any
  btngroupname:any
  channelusername:any
  groupusername:any

  constructor(private router:Router,private form:FormsModule, private mongo:MongoService,private fs:FileSystemService) { }

  ngOnInit(){
    this.getGroups()
    this.getUsers()
  }


  logoutUser(event){
    event.preventDefault();
    localStorage.removeItem("username");
    localStorage.removeItem("roles");
    this.router.navigateByUrl('/login')
  }

  openChannel(channel){
    localStorage.setItem("channel_name",channel)
    this.router.navigateByUrl('/channel')
  }

  addUser(event){
    event.preventDefault();
    console.log("adding user")
    if (this.userrole == "Super_User"){
      this.userroles = ["User","Group_User",this.userrole]
      this.userOBJ = {name:this.username,email:this.useremail,roles:this.userroles}
      this.fs.add_user(this.userOBJ).subscribe(users =>{
        if (users.success == false){
          alert("user already exists")
        }else{
          this.getUsers()
          this.clearUserData()
        }
      })
    }
    else if(this.userrole == "Group_User"){
      this.userroles = ["User",this.userrole]
      this.userOBJ = {name:this.username,email:this.useremail,roles:this.userroles}
      this.fs.add_user(this.userOBJ).subscribe(users =>{
        if (users.success == false){
          alert("user already exists")
        }else{
          this.getUsers()
          this.clearUserData()
        }
      })
    }
    else{
      this.userOBJ = {name:this.username,email:this.useremail,roles:[this.userrole]}
      this.fs.add_user(this.userOBJ).subscribe(users =>{
        if (users.success == false){
          alert("user already exists")
        }else{
          this.getUsers()
          this.clearUserData()
        }
      })
    }
  }

  addGroup(event){
    event.preventDefault();
    var groupObj = {group_name:this.groupname,users:[localStorage.getItem("username")]}
    this.fs.add_group(groupObj).subscribe(groups =>{
      if (groups.success == false){
        alert("group already exists")
      }else{
        this.getGroups();
        this.groupname = ''
      }
    })
  }

  getUsers(){
    this.fs.get_users().subscribe(users =>{
      console.log("getting users")
      console.log(users)
      this.user_list = users.users
    })
  }

  getGroups(){
    this.fs.get_groups().subscribe(groups =>{
      console.log(groups)
      this.getChannels(groups)
    })
  }

  getChannels(groups){
    this.fs.get_channels().subscribe(channels =>{
      console.log(channels)
      this.list_creation(groups,channels)
    })
  }


  list_creation(groups,channels){
    var arr = []
    for (var i = 0; i < groups.groups.length; i++){
      var groupusers = groups.groups[i].users
      if(groupusers.includes(localStorage.getItem("username")) || localStorage.getItem("roles").includes('super_admin')){
        var obj = {
            name: groups.groups[i].group_name,
            channels : []
        }
        for (var j = 0; j < channels.channels.length; j++){
          if(groups.groups[i].group_name == channels.channels[j].group_id){
            var lst = channels.channels[j].users
            if(lst.includes(localStorage.getItem("username")) || localStorage.getItem("roles").includes('super_admin') || localStorage.getItem("roles").includes('group_admin')){
              obj.channels.push({
                id: channels.channels[j].channel_id,
                name: channels.channels[j].channel_name,
                users: channels.channels[j].users
              })
            }
          }
        }
      arr.push(obj)
      }
    }
    this.combined_list = arr
    this.group_list = groups.groups
    this.channel_list = channels.channels
    console.log(arr)
  }

  delete_group(name){
    console.log("delete group"+name)
    this.fs.delete_group(name).subscribe(groups =>{
      console.log(groups)
      this.getGroups()
    })
  }

  adding_channel(name){
    localStorage.setItem("group_name",name)
  }

  adding_user_channel(name){
    console.log(name)
    localStorage.setItem("channel_name",name)
  }

  clearUserData(){
    this.useremail = ''
    this.username = ''
    this.userrole = 'User'
    this.userroles = []
  }

  delete_channel(event){
    event.preventDefault()
    console.log("delete channel")

  }
  addChannel(event){
    event.preventDefault()
    console.log("add channel")
    var channelObj = {channel_name:this.channelname,group_id:localStorage.getItem("group_name"),users:[localStorage.getItem("username")]}
    this.fs.add_channel(channelObj).subscribe(channels =>{
      console.log(channels)
      if (channels.success == false){
        alert("channel already exists")
      }else{
        this.getGroups();
        this.channelname = ''
        localStorage.removeItem("group_name")
      }
    })
  }

  addUserGroup(event){
    event.preventDefault()
    console.log("Adding user to "+this.groupusername+" group")
    this.fs.edit_group(this.groupusername,localStorage.getItem("group_name")).subscribe(groups=>{
      console.log(groups)
      this.groupusername = ""
    })
  }

  addUserChannel(event){
    event.preventDefault()
    console.log("Adding user to "+this.channelusername+" group")
    this.fs.edit_channel(this.channelusername,localStorage.getItem("channel_name")).subscribe(channels=>{
      console.log(channels)
      this.channelname = ""
    })
  }

}
