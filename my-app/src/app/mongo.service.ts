import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class MongoService {

  constructor(private http: HttpClient) { }

  //check if user exists
  check_user(username:string,password:string): Observable<any>{
    return this.http.post('/api/auth',{
      username:username,
      password:password
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
  delete_users(id:string):Observable<any>{
    return this.http.delete(`/api/users/${id}`,{

    })
  }

  //add a group
  add_group(groupObj:object):Observable<any>{
    return this.http.post('/api/groups',{
      groupObj:groupObj
    })
  }

  //edits a group
  edit_group(groupuser,groupid):Observable<any>{
    return this.http.put('/api/groups',{
      groupuser:groupuser,
      groupid:groupid
    })
  }

  //to delete a user from a group
  delete_group_user(group,name):Observable<any>{
    return this.http.delete(`/api/groups/${group}/${name}`,{

    })
  }
  
  //deletes a group
  delete_group(id:string):Observable<any>{
    console.log(id)
    return this.http.delete(`/api/groups/${id}`, {})
  }

  //gets all channels
  get_channels():Observable<any>{
    return this.http.get('/api/channels',{

    })
  }

  //edits a channel
  edit_channel(channeluser:string,channelid:string):Observable<any>{
    return this.http.put('/api/channels',{
      channeluser:channeluser,
      channelid:channelid
    })
  }

  //to delete a user from a channel
  delete_channel_user(channel,name):Observable<any>{
    return this.http.delete(`/api/channels/${channel}/${name}`,{

    })
  }

  //delets a channel
  delete_channel(id:string):Observable<any>{
    return this.http.delete(`/api/channels/${id}`,{
      
    })
  }
}
