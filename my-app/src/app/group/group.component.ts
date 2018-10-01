import { Component, OnInit } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {Router} from '@angular/router';
import {MongoService} from '../mongo.service'
import {FileSystemService} from '../file-system.service'
import {ImguploadService} from '../imgupload.service'

@Component({
  selector: 'app-group',
  templateUrl: './group.component.html',
  styleUrls: ['./group.component.css']
})
export class GroupComponent implements OnInit {

  group_name:any
  channel_name:any
  channel_id:any
  group_id:any
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
  userpassword:string = '';
  userrole:string = 'User';
  userroles:any
  userOBJ:any
  groupname:any
  channelname:any
  btngroupname:any
  channelusername:any
  groupusername:any
  userid:any
  editusername:any
  edituseremail:any
  edituserpassword:any
  edituserroles:any
  edituserrole:any
  edituserimage:any
  user_name_list:any
  user_selectedfile = null
  userimgpath=''
  user:any

  constructor(private router:Router,private form:FormsModule, private mongo:MongoService,private fs:FileSystemService, private iup:ImguploadService) { }

  ngOnInit(){
    //does these on page load.
    this.getGroups()
    this.getUsers()
    this.user = sessionStorage.getItem("username")
    //checks if the logged in user is either a group user or super user
    if(sessionStorage.getItem("roles").includes("Group_User")){
      this.isgroupadmin = true
    }else{
      this.isgroupadmin = false
    }
    if(sessionStorage.getItem("roles").includes("Super_User")){
      this.issuperadmin = true
    }else{
      this.issuperadmin = false
    }
  }

  //logs out the users and deletes the username and roles from the sessionStorage
  logoutUser(event){
    event.preventDefault();
    sessionStorage.removeItem("username");
    sessionStorage.removeItem("roles");
    this.router.navigateByUrl('/login')
  }
  //sets the channel clicked on and sends you to the channel page
  openChannel(channel,channelid,groupid){
    sessionStorage.setItem("channel_name",channel)
    sessionStorage.setItem("channel_id",channelid)
    sessionStorage.setItem("group_id", groupid)
    this.router.navigateByUrl('/channel')
  }

  onFileSelected(event){
    console.log(event);
    this.user_selectedfile = event.target.files[0];
  }
  //add a user by sending object to fileservice that will send that data to server. checks if name and email is blank.
  addUser(){
    if (this.user_selectedfile == null){
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
          this.userOBJ = {name:this.username, password:this.userpassword,image:'',email:this.useremail,roles:this.userroles}
          this.mongo.add_user(this.userOBJ).subscribe(users =>{
            if (users.success == false){
              alert("user already exists")
            }else{
              this.getUsers()
              this.clearUserData()
              this.user_selectedfile = null
            }
          })
        }
        else if(this.userrole == "Group_User"){
          this.userroles = ["User",this.userrole]
          this.userOBJ = {name:this.username, password:this.userpassword,image:'',email:this.useremail,roles:this.userroles}
          this.mongo.add_user(this.userOBJ).subscribe(users =>{
            if (users.success == false){
              alert("user already exists")
            }else{
              this.getUsers()
              this.clearUserData()
              this.user_selectedfile = null
            }
          })
        }
        else{
          this.userOBJ = {name:this.username, password:this.userpassword,image:'',email:this.useremail,roles:[this.userrole]}
          this.mongo.add_user(this.userOBJ).subscribe(users =>{
            if (users.success == false){
              alert("user already exists")
            }else{
              this.getUsers()
              this.clearUserData()
              this.user_selectedfile = null
            }
          })
        }
      }
    }else{
      const fd = new FormData();
      fd.append('image',this.user_selectedfile,this.username+this.user_selectedfile.name)
      this.iup.imgupload(fd).subscribe(res=>{
        this.userimgpath = res.data.filename
        console.log(res.data.filename+','+res.data.size)
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
            this.userOBJ = {name:this.username, password:this.userpassword,image:'images/'+this.userimgpath,email:this.useremail,roles:this.userroles}
            this.mongo.add_user(this.userOBJ).subscribe(users =>{
              if (users.success == false){
                alert("user already exists")
              }else{
                this.getUsers()
                this.clearUserData()
                this.user_selectedfile = null
              }
            })
          }
          else if(this.userrole == "Group_User"){
            this.userroles = ["User",this.userrole]
            this.userOBJ = {name:this.username, password:this.userpassword,image:'images/'+this.userimgpath,email:this.useremail,roles:this.userroles}
            this.mongo.add_user(this.userOBJ).subscribe(users =>{
              if (users.success == false){
                alert("user already exists")
              }else{
                this.getUsers()
                this.clearUserData()
                this.user_selectedfile = null
              }
            })
          }
          else{
            this.userOBJ = {name:this.username, password:this.userpassword,image:'images/'+this.userimgpath,email:this.useremail,roles:[this.userrole]}
            this.mongo.add_user(this.userOBJ).subscribe(users =>{
              if (users.success == false){
                alert("user already exists")
              }else{
                this.getUsers()
                this.clearUserData()
                this.user_selectedfile = null
              }
            })
          }
        }
      })
    }
  }

  //add a group, checks if the name is blank then sends request to server.
  addGroup(event){
    event.preventDefault();
    this.greset()
    if(this.groupname == "" || this.groupname == null){
      this.gnamefalse = true
    }else{
      var groupObj = {group_name:this.groupname,users:[sessionStorage.getItem("username")]}
      this.mongo.add_group(groupObj).subscribe(groups =>{
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
    this.mongo.get_users().subscribe(users =>{
      console.log("getting users")
      console.log(users.users)
      this.user_list = users.users
      console.log(this.user_list)
      this.user_name_list = []
      for(var i = 0; i < users.users.length;i++){
        console.log("users are: "+users.users[i].name)
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
    this.mongo.get_channels().subscribe(channels =>{
      console.log(channels)
      this.list_creation(groups,channels)
    })
  }

  //create a list from the getGroups and getChannels.
  list_creation(groups,channels){
    var arr = []
    for (var i = 0; i < groups.groups.length; i++){
      var groupusers = groups.groups[i].users
      if(groupusers.includes(sessionStorage.getItem("username")) || sessionStorage.getItem("roles").includes('super_admin')){
        var obj = {
            id: groups.groups[i]._id,
            name: groups.groups[i].group_name,
            channels : [],
            users: groups.groups[i].users
        }
        for (var j = 0; j < channels.channels.length; j++){
          if(groups.groups[i]._id == channels.channels[j].group_id){
            var lst = channels.channels[j].users
            if(lst.includes(sessionStorage.getItem("username")) || sessionStorage.getItem("roles").includes('Super_User') || sessionStorage.getItem("roles").includes('Group_User')){
              obj.channels.push({
                id: channels.channels[j]._id,
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
  delete_group(id){
    console.log("delete group "+ id)
    this.mongo.delete_group(id).subscribe(groups =>{
      console.log(groups)
      this.getGroups()
    })
  }
  // sends a request to the server to delete a user
  delete_user(id){
    this.mongo.delete_users(id).subscribe(users =>{
      console.log(users)
      this.getUsers()
    })
  }
  //sets the group name to local storage so it can be accessed later
  adding_channel(name){
    this.group_id = name
  }
  //this function sets group name channel name and sets the user list to users so it can be displayed in a modal
  channel_users(channelid,users,groupid){
    this.channel_id = channelid
    this.group_id = groupid
    this.c_user_list = users
  }
  //this function sets the group name and the use list of the group so it can be displayed in a modal
  group_users(groupid,users){
    this.group_id = groupid
    this.g_user_list = users
  }
  //this function clears the data a form would hold.
  clearUserData(){
    this.userpassword = ''
    this.useremail = ''
    this.username = ''
    this.userrole = 'User'
    this.userroles = []
  }
  //this sends a request to the server to delete a channel
  delete_channel(id,name){
    console.log("delete channel "+ name)
    this.fs.delete_channel(id).subscribe(channels=>{
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
      var channelObj = {channel_name:this.channelname,group_id:this.group_id,users:[sessionStorage.getItem("username")]}
      this.fs.add_channel(channelObj).subscribe(channels =>{
        console.log(channels)
        if (channels.success == false){
          alert("channel already exists")
        }else{
          this.channelname = ""
          this.getGroups();
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
        this.mongo.edit_group(this.groupusername,this.group_id).subscribe(groups=>{
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
        this.mongo.edit_channel(this.channelusername,this.channel_id).subscribe(channels=>{
          console.log(channels)
          //if user already exists in channel
          if(this.c_user_list.includes(this.channelusername)){

          }else{ //then add to channel
            this.c_user_list.push(this.channelusername)
          }
          this.mongo.edit_group(this.channelusername,this.group_id).subscribe(groups=>{
            this.getGroups()
          })
          this.channelusername = ""
        })
      }else{
        this.cuserfalse = true
      }
    }
  }
  //this sends a request to the server to delete a user from a channel
  delete_user_channel(users){
    this.mongo.delete_channel_user(this.channel_id, users).subscribe(channels=>{
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
    this.mongo.delete_group_user(this.group_id, users).subscribe(channels=>{
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
  edit_user(user){
    this.userid = user._id
    this.editusername = user.name
    this.edituseremail = user.email
    this.edituserpassword = user.password
    this.edituserrole = user.roles[user.roles.length - 1]
    this.edituserimage = user.image
  }
  //this sends a request to the server to update a user info
  editUser(){
    console.log("hello")
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
      if(this.user_selectedfile == null){
        if (this.edituserrole == "Super_User"){
          this.edituserroles = ["User","Group_User",this.edituserrole]
          this.userOBJ = {id:this.userid, name:this.editusername, password:this.edituserpassword,image:this.edituserimage, email:this.edituseremail, roles:this.edituserroles}
          this.mongo.edit_user(this.userOBJ).subscribe(users =>{
            if (users.success == false){
              alert("user already exists")
            }else{
              this.getUsers()
              this.clearUserData()
              this.user_selectedfile == null
            }
          })
        }
        else if(this.edituserrole == "Group_User"){
          this.edituserroles = ["User",this.edituserrole]
          this.userOBJ = {id:this.userid, name:this.editusername, password:this.edituserpassword,image:this.edituserimage, email:this.edituseremail, roles:this.edituserroles}
          this.mongo.edit_user(this.userOBJ).subscribe(users =>{
            if (users.success == false){
              alert("user already exists")
            }else{
              this.getUsers()
              this.clearUserData()
              this.user_selectedfile = null
            }
          })
        }
        else{
          this.userOBJ = {id:this.userid, name:this.editusername, password:this.edituserpassword,image:this.edituserimage, email:this.edituseremail, roles:[this.edituserrole]}
          this.mongo.edit_user(this.userOBJ).subscribe(users =>{
            if (users.success == false){
              alert("user already exists")
            }else{
              this.getUsers()
              this.clearUserData()
              this.user_selectedfile == null
            }
          })
        }
      }else{
        const fd = new FormData();
        fd.append('image',this.user_selectedfile,this.editusername+this.user_selectedfile.name)
        this.iup.imgupload(fd).subscribe(res=>{
          this.userimgpath = res.data.filename
          console.log(res.data.filename+','+res.data.size)
          this.ureset()
          console.log("adding user")
          if (this.edituserrole == "Super_User"){
            this.edituserroles = ["User","Group_User",this.edituserrole]
            this.userOBJ = {id:this.userid, name:this.editusername, password:this.edituserpassword,image:'images/'+this.userimgpath, email:this.edituseremail, roles:this.edituserroles}
            this.mongo.edit_user(this.userOBJ).subscribe(users =>{
              if (users.success == false){
                alert("user already exists")
              }else{
                this.getUsers()
                this.clearUserData()
                this.user_selectedfile = null
              }
            })
          }
          else if(this.edituserrole == "Group_User"){
            this.edituserroles = ["User",this.edituserrole]
            this.userOBJ = {id:this.userid, name:this.editusername, password:this.edituserpassword,image:'images/'+this.userimgpath, email:this.edituseremail, roles:this.edituserroles}
            this.mongo.edit_user(this.userOBJ).subscribe(users =>{
              if (users.success == false){
                alert("user already exists")
              }else{
                this.getUsers()
                this.clearUserData()
                this.user_selectedfile = null
              }
            })
          }
          else{
            this.userOBJ = {id:this.userid, name:this.editusername, password:this.edituserpassword,image:'images/'+this.userimgpath, email:this.edituseremail, roles:[this.edituserrole]}
            this.mongo.edit_user(this.userOBJ).subscribe(users =>{
              if (users.success == false){
                alert("user already exists")
              }else{
                this.getUsers()
                this.clearUserData()
                this.user_selectedfile = null
              }
            })
          }
        })
      }
    }
  }

}