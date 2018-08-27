import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MongoService {

  constructor(private http: HttpClient) { }


  see_users(){
    return this.http.post('/api/auth',{

    })
  }
}
