import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from "rxjs";


@Injectable({
  providedIn: 'root'
})
export class FileSystemService {

  constructor(private http: HttpClient) { }



  check_user(username:string): Observable<any>{
    return this.http.post('/api/auth',{
      username:username
    });
  }

  get_users():Observable<any>{
    return this.http.get('/api/users',{

    })
  }

  add_user(userOBJ:object):Observable<any>{
    return this.http.post('/api/users',{
      userOBJ:userOBJ
    })
  }

  edit_user():Observable<any>{
    return this.http.put('/api/users',{

    })
  }

  delete_users():Observable<any>{
    return this.http.delete('/api/users',{

    })
  }

  get_groups():Observable<any>{
    return this.http.get('/api/groups',{

    })
  }

  add_group(groupObj:object):Observable<any>{
    return this.http.post('/api/groups',{
      groupObj:groupObj
    })
  }

  edit_group(groupuser,groupname):Observable<any>{
    return this.http.put('/api/groups',{
      groupuser:groupuser,
      groupname:groupname
    })
  }

  delete_group(name:string):Observable<any>{
    console.log(name)
    return this.http.delete(`/api/groups/${name}`, {})
  }

  get_channels():Observable<any>{
    return this.http.get('/api/channels',{

    })
  }

  add_channel(channel):Observable<any>{
    return this.http.post('/api/channels',{
      channelobj:channel
    })
  }

  edit_channel(channeluser,channelname):Observable<any>{
    return this.http.put('/api/channels',{
      channeluser:channeluser,
      channelname:channelname
    })
  }

  delete_channel():Observable<any>{
    return this.http.delete('/api/channels',{
      
    })
  }
}
