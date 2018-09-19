import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {FormsModule} from '@angular/forms'
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { GroupComponent } from './group/group.component';
import { MongoService } from './mongo.service';
import { FileSystemService} from './file-system.service';
import { ChannelComponent } from './channel/channel.component';
import { SocketService } from './socket.service';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    GroupComponent,
    ChannelComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {"path":"login","component":LoginComponent},
      {"path":"group","component":GroupComponent},
      {"path":"channel","component":ChannelComponent},
    ]),
    FormsModule,
    HttpClientModule
  ],
  providers: [MongoService, FileSystemService, SocketService],
  bootstrap: [AppComponent]
})
export class AppModule { }
