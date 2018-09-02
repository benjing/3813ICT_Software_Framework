# 3813ICT_Software_Framework_Assignment_1
# Documentation

Installing/Running

1. First pull the project from GitHub
2. Run Npm install in the server folder
3. run node server.js

# Git Layout

The way my git repository is laid out is having a main folder that has all my projects in it. This is set out like this because it would allow me to then have all my projects in the one folder, so I don&#39;t have to keep many repository&#39;s. During the project when I started to implement the filesystem(or before I knew I had to use file system and was going to use mongo) I branched off the repository so that I could make sure that the filesystem worked perfectly before merging the branch and the origin. Or so that I could leave the branch and start over from before I implemented the filesystem.

# Data Structures

There where only three entities. These are the users, the groups and the channels. The data structures of these entities are:

Users:

| name | Type |
| --- | --- |
| name | String, required |
| email | String |
| roles | Array of strings |

Groups:

| Name | Type |
| --- | --- |
| group\_name | String, required |
| users | Array of strings |

Channels:

| Name | Type |
| --- | --- |
| channel\_name | String |
| group\_ID | String |
| users | Array of strings |
| messages | Array of objects that consist of {name: string,message:string} |

# Client and Server Relationship

The client is an angular app that has socket.io installed and the client sends requests to the server that either retrieve update or delete data then the client shows the data to the user.

The server is a node server that has the express and socket.io install on it. This server gets requests from the client and then interacts with a file to retrieve, update or delete data then sends the result back to the client.





# Rest API

Filesystem API

| Route | Parameters | Method | Return Values | Purpose |
| --- | --- | --- | --- | --- |
| /api/auth | username:string | Post | userObj:objectsuccess:Boolean | To check if a user exists |
| /api/users |   | Get | userObj:objectsuccess:Boolean | To get all users |
| /api/users | userObj:object | Post | userObj:objectsuccess:boolean | To add a user |
| /api/users |   | Put | userObj:objectsuccess:boolean | To edit a users role |
| /api/users/:name | name:string | Delete | userObj:objectsuccess:boolean | To delete a user |
| /api/groups |   | Get | groupObj:objectsuccess:boolean | To get all groups |
| /api/groups | groupObj:object | Post | groupObj:objectsuccess:boolean | To add a group |
| /api/groups | groupuser:string,  groupname:string | Put | groupObj:objectsuccess:boolean | To add a user to a group |
| /api/groups/:name | Name:string | Delete | groupObj:objectsuccess:boolean | To delete a group |
| /api/channels |   | Get | channelObj:objectsuccess:boolean | To get all channels |
| /api/channels | channel:object | Post | channelObj:objectsuccess:boolean | Add a channel |
| /api/channels | channeluser:string, channelname:string | Put | channelObj:objectsuccess:boolean | Add a user to a channel |
| /api/channels/:name | Name:string | Delete | channelObj:objectsuccess:boolean | To delete a channel |
| /api/channels/:channel/:name | channel:string,Name:string | Delete | channelObj:objectsuccess:boolean | To delete a user from channel |
| /api/groups/:group/:name | group:string, name:string | Delete | channelObj:objectsuccess:boolean | To delete a user from channel |







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

Components

| Component | Purpose |
| --- | --- |
| Login | The purpose of this component is to get the usersname from the user and send the request to the server then check if the response of the server is true or false. If true log them in and direct them to group, if false then display error message. |
| Group | The group component on load calls the request for all three entities the users, the groups and the channels, it then displays this data on the page for the user, this page also deals with most of the adding and editing of users groups and channels. |
| Channel | This component right now only calls for a channel and the users of said channel. This is also the component that will later be used as the chat page. |