# 3813ICT_Software_Framework
# Documentation

Installing/Running

1. First pull the project from GitHub
2. Run Npm install in the server folder
3. install express, mongo ,mongoose and socket.io
3. run node server.js

Running the test
1. go the server folder
2. run node server.js
3. run command npm test

# Git Layout

The way my git repository is laid out is having a main folder that has all my projects in it. This is set out like this because it would allow me to then have all my projects in the one folder, so I don&#39;t have to keep many repository&#39;s. During the project when I started to implement the filesystem(or before I knew I had to use file system and was going to use mongo) I branched off the repository so that I could make sure that the filesystem worked perfectly before merging the branch and the origin. Or so that I could leave the branch and start over from before I implemented the filesystem.

# Data Structures

There where only three entities. These are the users, the groups and the channels. The data structures of these entities are:

Users:

| name | Type |
| --- | --- |
|id|Unique String|
| name | String, required |
|password|String|
|image|String(image path)|
| email | String |
| roles | Array of strings |

Groups:

| Name | Type |
| --- | --- |
|id|Unique String|
| group\_name | String, required |
| users | Array of strings |

Channels:

| Name | Type |
| --- | --- |
|id|Unique String|
| channel\_name | String |
| group\_ID | String |
| users | Array of strings |
| messages | Array of objects that consist of {name: String, userimage: String, message: String, image: Boolean} |

# Client and Server Relationship

The client is an angular app that has socket.io installed and the client sends requests to the server that either retrieve update or delete data then the client shows the data to the user.

The server is a node server that has the express and socket.io install on it. This server gets requests from the client and then interacts with a file to retrieve, update or delete data then sends the result back to the client. server also gets requests to save an image onto the server. It also gets the join message from the client and then waits for a message sent to it by the client.





# Rest API

Filesystem API

| Route | Parameters | Method | Return Values | Purpose |
| --- | --- | --- | --- | --- |
| /api/auth | username:string password:string | Post | userObj:object success:Boolean | To check if a user exists |
| /api/users |   | Get | userObj:objectsuccess:Boolean | To get all users |
| /api/users | userObj:object | Post | userObj:object success:boolean | To add a user |
| /api/users | userObj:object  | Put | userObj:objectsuccess:boolean | To edit a users role |
| /api/users/:id | id:string | Delete | userObj:object success:boolean | To delete a user |
| /api/groups |   | Get | groupObj:object success:boolean | To get all groups |
| /api/groups | groupObj:object | Post | groupObj:object success:boolean | To add a group |
| /api/groups | groupuser:string,  groupid:string | Put | groupObj:objectsuccess:boolean | To add a user to a group |
| /api/groups/:group/:name | group:string name:string | Delete | groupObj:objectsuccess:boolean | To delete a group |
| /api/channels |   | Get | channelObj:objectsuccess:boolean | To get all channels |
| /api/channels | channel:object | Post | channelObj:object success:boolean | Add a channel |
| /api/channels | channeluser:string, channelid:string | Put | channelObj:object success:boolean | Add a user to a channel |
| /api/channels/:id | id:string | Delete | channelObj:object success:boolean | To delete a channel |
| /api/channels/:channel/:name | channel:string,Name:string | Delete | channelObj:objectsuccess:boolean | To delete a user from channel |
| /api/groups/:group/:name | group:string, name:string | Delete | channelObj:objectsuccess:boolean | To delete a user from channel |
| /api/upload | username:string password:string | Post | result:string data:{'filename':string,'size':integer} numberofimages: integer message: string | to save an image onto the server and then give back the file name as a string. |






# Angular Architect

Routes

App.module.ts

| path | component |
| --- | --- |
| /login | Logincomponent |
| /group | Groupcomponent |
| /channel | Channelcomponent |



Services

| Service | Purpose |
| --- | --- |
| Mongo | Was to call the request to the server to get or save data to a mongo DB (wasn&#39;t implemented) |
| filesystem | To call the request to the server to get or save data to a file. |
| socket | To make chat rooms and send and recieve messages |
| imgupload | To save a file to the server |

Components

| Component | Purpose |
| --- | --- |
| Login | The purpose of this component is to get the usersname from the user and send the request to the server then check if the response of the server is true or false. If true log them in and direct them to group, if false then display error message. |
| Group | The group component on load calls the request for all three entities the users, the groups and the channels, it then displays this data on the page for the user, this page also deals with most of the adding and editing of users groups and channels. |
| Channel | This component right now only calls for a channel and the users of said channel. This is also the component that will later be used as the chat page. |
