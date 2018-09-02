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

  isgroupadmin = false
  issuperadmin = false
  unamefalse = false
  uemailfalse=false
  gnamefalse = false
  cnamefalse = false
  cunamefalse = false
  gunamefalse = false
  cuserfalse = false
  guserfalse = false
  euemailfalse = false
  eunamefalse = false
  combined_list:any
  group_list:any
  channel_list:any
  user_list:any
  c_user_list:any
  g_user_list:any
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
  editusername:any
  edituseremail:any
  edituserroles:any
  edituserrole:any
  user_name_list:any

  constructor(private router:Router,private form:FormsModule, private mongo:MongoService,private fs:FileSystemService) { }

  ngOnInit(){
    //does these on page load.
    this.getGroups()
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

  //logs out the users and deletes the username and roles from the localstorage
  logoutUser(event){
    event.preventDefault();
    localStorage.removeItem("username");
    localStorage.removeItem("roles");
    this.router.navigateByUrl('/login')
  }
  //sets the channel clicked on and sends you to the channel page
  openChannel(channel,group){
    localStorage.setItem("channel_name",channel)
    localStorage.setItem("group_name", group)
    this.router.navigateByUrl('/channel')
  }
  //add a user by sending object to fileservice that will send that data to server. checks if name and email is blank.
  addUser(event){
    event.preventDefault();
    this.ureset()
    console.log("adding user")
    if(this.username == "" || this.username == null){
      if(this.useremail == "" || this.useremail == null){
        this.uemailfalse = true
      }
      this.unamefalse = true
    }else if(this.useremail == "" || this.useremail == null){
      this.uemailfalse = true
    }else{
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
  }
  //add a group, checks if the name is blank then sends request to server.
  addGroup(event){
    event.preventDefault();
    this.greset()
    if(this.groupname == "" || this.groupname == null){
      this.gnamefalse = true
    }else{
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
  //sends a request to the server to get all groups then puts them in a list.
  getGroups(){
    this.fs.get_groups().subscribe(groups =>{
      console.log(groups)
      this.getChannels(groups)
    })
  }
  //sends a request to the server to get all channels then puts them in a list
  getChannels(groups){
    this.fs.get_channels().subscribe(channels =>{
      console.log(channels)
      this.list_creation(groups,channels)
    })
  }

  //create a list from the getGroups and getChannels.
  list_creation(groups,channels){
    var arr = []
    for (var i = 0; i < groups.groups.length; i++){
      var groupusers = groups.groups[i].users
      if(groupusers.includes(localStorage.getItem("username")) || localStorage.getItem("roles").includes('super_admin')){
        var obj = {
            name: groups.groups[i].group_name,
            channels : [],
            users: groups.groups[i].users
        }
        for (var j = 0; j < channels.channels.length; j++){
          if(groups.groups[i].group_name == channels.channels[j].group_id){
            var lst = channels.channels[j].users
            if(lst.includes(localStorage.getItem("username")) || localStorage.getItem("roles").includes('Super_User') || localStorage.getItem("roles").includes('Group_User')){
              obj.channels.push({
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

  //sends a request to the server to delete a group
  delete_group(name){
    console.log("delete group "+name)
    this.fs.delete_group(name).subscribe(groups =>{
      console.log(groups)
      this.getGroups()
    })
  }
  // sends a request to the server to delete a user
  delete_user(name){
    this.fs.delete_users(name).subscribe(users =>{
      console.log(users)
      this.getUsers()
    })
  }
  //sets the group name to local storage so it can be accessed later
  adding_channel(name){
    localStorage.setItem("group_name",name)
  }
  //sets the channel name to local storage so it can be accessed later
  adding_user_channel(cname){
    localStorage.setItem("channel_name",cname)
  }
  //this function sets group name channel name and sets the user list to users so it can be displayed in a modal
  channel_users(name,users,gname){
    localStorage.setItem("group_name",gname)
    localStorage.setItem("channel_name",name)
    this.c_user_list = users
  }
  //this function sets the group name and the use list of the group so it can be displayed in a modal
  group_users(name,users){
    localStorage.setItem("group_name", name)
    this.g_user_list = users
  }
  //this function clears the data a form would hold.
  clearUserData(){
    this.useremail = ''
    this.username = ''
    this.userrole = 'User'
    this.userroles = []
  }
  //this sends a request to the server to delete a channel
  delete_channel(name){
    console.log("delete channel "+name)
    this.fs.delete_channel(name).subscribe(channels=>{
      console.log(channels)
      this.getGroups()
    })

  }
  //this sends a request to the server to add a channel
  addChannel(event){
    event.preventDefault()
    this.creset()
    if(this.channelname == "" || this.channelname == null){
      this.cnamefalse = true
    }else{
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
  }
  //this sends a request to the server to add a user to a group
  addUserGroup(event){
    event.preventDefault()
    this.gureset()
    if(this.groupusername == "" || this.groupusername == null){
      this.gunamefalse = true
    }else{
      if(this.user_name_list.includes(this.groupusername)){
        console.log("Adding user to "+this.groupusername+" group")
        this.fs.edit_group(this.groupusername,localStorage.getItem("group_name")).subscribe(groups=>{
          console.log(groups)
          if(this.g_user_list.includes(this.groupusername)){

          }else{
            this.g_user_list.push(this.groupusername)
          }
          this.getGroups()
          this.groupusername = ""
        })
      }else{
        this.guserfalse = true
      }
    }
  }
  //this sends a request to the server to add a user to a channel
  addUserChannel(event){
    event.preventDefault()
    this.cureset()
    if(this.channelusername == "" || this.channelusername == null){
      this.cunamefalse = true
    }else{
      if(this.user_name_list.includes(this.channelusername)){
        console.log("Adding user to "+this.channelusername+" group")
        this.fs.edit_channel(this.channelusername,localStorage.getItem("channel_name")).subscribe(channels=>{
          console.log(channels)
          if(this.c_user_list.includes(this.channelusername)){

          }else{
            this.c_user_list.push(this.channelusername)
          }
          this.fs.edit_group(this.channelusername,localStorage.getItem("group_name")).subscribe(groups=>{
            this.getGroups()
          })
          this.channelname = ""
        })
      }else{
        this.cuserfalse = true
      }
    }
  }
  //this sends a request to the server to delete a user from a channel
  delete_user_channel(users){
    console.log("deleteing "+users+" from channel "+localStorage.getItem("channel_name"))
    this.fs.delete_channel_user(localStorage.getItem("channel_name"), users).subscribe(channels=>{
      console.log(channels)
      this.getGroups()
      for(var i = 0;i<this.c_user_list.length;i++){
        if (this.c_user_list[i] == users){
          this.c_user_list.splice(i,1)
        }
      }
    })
  }
  //this sends a request to the server to delete a user from a group
  delete_user_group(users){
    console.log("deleteing "+users+" group")
    console.log("deleteing "+users+" from channel "+localStorage.getItem("channel_name"))
    this.fs.delete_group_user(localStorage.getItem("group_name"), users).subscribe(channels=>{
      console.log(channels)
      this.getGroups()
      for(var i = 0;i<this.g_user_list.length;i++){
        if (this.g_user_list[i] == users){
          this.g_user_list.splice(i,1)
        }
      }
    })
  }
  //this resets the error stat of the group user form
  gureset(){
    this.gunamefalse = false
    this.guserfalse = false
  }
  //this resets the error stat of the channel user form
  cureset(){
    this.cunamefalse = false
    this.cuserfalse = false
  }
  //this resets the error stat of the user form
  ureset(){
    this.uemailfalse = false
    this.unamefalse = false
  }
  //this resets the error stat of the group form
  greset(){
    this.gnamefalse = false
  }
  //this resets the error stat of the channel form
  creset(){
    this.cnamefalse = false
  }
  //this resets the error stat of the edit user form
  eureset(){
    this.euemailfalse = false
    this.eunamefalse = false
  }
  //this sets the user info of the user clicked when going to edit a us
  edit_user(name,email,roles){
    this.editusername = name
    this.edituseremail = email
    this.edituserrole = roles[roles.length - 1]
  }
  //this sends a request to the server to update a user info
  editUser(event){
    event.preventDefault();
    this.eureset()
    console.log("adding user")
    if(this.editusername == "" || this.editusername == null){
      if(this.edituseremail == "" || this.edituseremail == null){
        this.euemailfalse = true
      }
      this.eunamefalse = true
    }else if(this.edituseremail == "" || this.edituseremail == null){
      this.euemailfalse = true
    }else{
      if (this.edituserrole == "Super_User"){
        this.edituserroles = ["User","Group_User",this.edituserrole]
        this.userOBJ = {name:this.editusername,email:this.edituseremail,roles:this.edituserroles}
        this.fs.edit_user(this.userOBJ).subscribe(users =>{
          if (users.success == false){
            alert("user already exists")
          }else{
            this.getUsers()
            this.clearUserData()
          }
        })
      }
      else if(this.edituserrole == "Group_User"){
        this.edituserroles = ["User",this.edituserrole]
        this.userOBJ = {name:this.editusername,email:this.edituseremail,roles:this.edituserroles}
        this.fs.edit_user(this.userOBJ).subscribe(users =>{
          if (users.success == false){
            alert("user already exists")
          }else{
            this.getUsers()
            this.clearUserData()
          }
        })
      }
      else{
        this.userOBJ = {name:this.editusername,email:this.edituseremail,roles:[this.edituserrole]}
        this.fs.edit_user(this.userOBJ).subscribe(users =>{
          if (users.success == false){
            alert("user already exists")
          }else{
            this.getUsers()
            this.clearUserData()
          }
        })
      }
    }
  }

}
