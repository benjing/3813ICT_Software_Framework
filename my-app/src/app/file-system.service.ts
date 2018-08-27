import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from "rxjs";


@Injectable({
  providedIn: 'root'
})
export class FileSystemService {

  constructor(private http: HttpClient) { }



  see_users(username:string): Observable<any>{
    return this.http.post('/api/auth',{
      username:username
    });
  }

  get_groups():Observable<any>{
    return this.http.get('/api/groups',{

    })
  }

  delete_group():Observable<any>{
    return this.http.post('/api/groups',{
      
    })
  }
}
