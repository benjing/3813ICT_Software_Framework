import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from "rxjs";


@Injectable({
  providedIn: 'root'
})
export class FileSystemService {

  constructor(private http: HttpClient) { }


  //check if user exists
  check_user(username:string): Observable<any>{
    return this.http.post('/api/auth',{
      username:username
    });
  }

  //get all users
  get_users():Observable<any>{
    return this.http.get('/api/users',{

    })
  }

  //add a user
  add_user(userOBJ:object):Observable<any>{
    return this.http.post('/api/users',{
      userOBJ:userOBJ
    })
  }

  //edit a user
  edit_user(userObj:object):Observable<any>{
    return this.http.put('/api/users',{
      userObj:userObj
    })
  }

  //delete a user
  delete_users(name:string):Observable<any>{
    return this.http.delete(`/api/users/${name}`,{

    })
  }

  //get all groups
  get_groups():Observable<any>{
    return this.http.get('/api/groups',{

    })
  }

  //add a group
  add_group(groupObj:object):Observable<any>{
    return this.http.post('/api/groups',{
      groupObj:groupObj
    })
  }

  //edits a group
  edit_group(groupuser,groupname):Observable<any>{
    return this.http.put('/api/groups',{
      groupuser:groupuser,
      groupname:groupname
    })
  }

  //deletes a group
  delete_group(name:string):Observable<any>{
    console.log(name)
    return this.http.delete(`/api/groups/${name}`, {})
  }

  //gets all channels
  get_channels():Observable<any>{
    return this.http.get('/api/channels',{

    })
  }

  //gets a single channel
  get_channel():Observable<any>{
    return this.http.get('/api/channels',{

    })
  }

  //adds a channel
  add_channel(channel:object):Observable<any>{
    return this.http.post('/api/channels',{
      channelobj:channel
    })
  }

  //edits a channel
  edit_channel(channeluser:string,channelname:string):Observable<any>{
    return this.http.put('/api/channels',{
      channeluser:channeluser,
      channelname:channelname
    })
  }

  //delets a channel
  delete_channel(name:string):Observable<any>{
    return this.http.delete(`/api/channels/${name}`,{
      
    })
  }
  //to delete a user from a channel
  delete_channel_user(channel,name):Observable<any>{
    return this.http.delete(`/api/channels/${channel}/${name}`,{

    })
  }
  //to delete a user from a group
  delete_group_user(group,name):Observable<any>{
    return this.http.delete(`/api/groups/${group}/${name}`,{

    })
  }
}
