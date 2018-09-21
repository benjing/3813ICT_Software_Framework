import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import * as io from 'socket.io-client';

@Injectable({
  providedIn: 'root'
})
export class SocketService {
  private url = "http://localhost:3000";
  private socket;
  constructor() { }
  
  sendMessage(message){
    this.socket.emit('add-message', message);
  }
  getMessages(channelinfo){
    let obmessages = new Observable<any>(
      observer =>{
        this.socket = io.connect('',{query: 'channel='+JSON.stringify(channelinfo)});
        //listen for messages event
        this.socket.on('message',(data)=> {observer.next(data);});
        //when the observer ends then disconnect
        return ()=>{this.socket.disconnect();}
    })
    return obmessages;
  }
}
