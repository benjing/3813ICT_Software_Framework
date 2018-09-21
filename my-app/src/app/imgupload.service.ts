import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ImguploadService {

  constructor(private http: HttpClient) { }

  imgupload(fd){
    return this.http.post<any>('/api/upload', fd)
  }
}
