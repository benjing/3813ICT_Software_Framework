(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\r\n<div style=\"text-align:center\" id=\"pageHeader\" class=\"container-fluid\">\r\n  <h1>\r\n    University Chat\r\n  </h1>\r\n</div>\r\n<router-outlet></router-outlet>\r\n\r\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AppComponent = /** @class */ (function () {
    function AppComponent(router, form) {
        this.router = router;
        this.form = form;
        this.title = 'my-app';
    }
    AppComponent.prototype.ngOnInit = function () {
        this.router.navigateByUrl('/login');
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _group_group_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./group/group.component */ "./src/app/group/group.component.ts");
/* harmony import */ var _mongo_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./mongo.service */ "./src/app/mongo.service.ts");
/* harmony import */ var _file_system_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./file-system.service */ "./src/app/file-system.service.ts");
/* harmony import */ var _channel_channel_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./channel/channel.component */ "./src/app/channel/channel.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                _login_login_component__WEBPACK_IMPORTED_MODULE_6__["LoginComponent"],
                _group_group_component__WEBPACK_IMPORTED_MODULE_7__["GroupComponent"],
                _channel_channel_component__WEBPACK_IMPORTED_MODULE_10__["ChannelComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot([
                    { "path": "login", "component": _login_login_component__WEBPACK_IMPORTED_MODULE_6__["LoginComponent"] },
                    { "path": "group", "component": _group_group_component__WEBPACK_IMPORTED_MODULE_7__["GroupComponent"] },
                    { "path": "channel", "component": _channel_channel_component__WEBPACK_IMPORTED_MODULE_10__["ChannelComponent"] },
                ]),
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"]
            ],
            providers: [_mongo_service__WEBPACK_IMPORTED_MODULE_8__["MongoService"], _file_system_service__WEBPACK_IMPORTED_MODULE_9__["FileSystemService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/channel/channel.component.css":
/*!***********************************************!*\
  !*** ./src/app/channel/channel.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/channel/channel.component.html":
/*!************************************************!*\
  !*** ./src/app/channel/channel.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<button id=\"backBtn\" class=\"btn btn-success btn-primary\" (click)=\"back()\">Go Back</button>\r\n<div class=\"row\" style=\"margin-right: 0px;\">\r\n  <div class=\"col-sm-10\" id=\"groups\">\r\n    <div class=\"card\">\r\n      <div class=\"card-header\" id=\"cardhead\">\r\n        <h2>Channel: {{channel.channel_name}}</h2>\r\n      </div>\r\n      <div class=\"card-body\" id=\"cardbody\">\r\n        <div class=\"row\">\r\n          <div class=\"col-sm-12\">\r\n            <div *ngFor=\"let message of message_list\">\r\n              <span><p>{{message.name}} : </p></span>\r\n              <span><p>{{message.message}}</p></span>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"card-footer\">\r\n        <div>\r\n          <form>\r\n            Message:\r\n            <input type=\"text\">\r\n            <button class=\"btn btn-primary btn-success\">Send Message</button>\r\n          </form>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"col-sm-2\" id=\"users\">\r\n    <div class=\"card\">\r\n      <div class=\"card-header\" id=\"cardhead\">\r\n          <div class=\"col-sm-12 text-center\">\r\n              <h3>Users:</h3>\r\n          </div>\r\n          <div class=\"col-sm-12\">\r\n            <span data-toggle=\"modal\" data-target=\"#add_user_channel\">\r\n                <button type=\"button\" class=\"btn btn-block btn-success\" data-toggle=\"tooltip\" data-placement=\"top\" title=\"Add user\">Add a User</button>\r\n            </span>\r\n          </div>\r\n      </div>\r\n      <div class=\"card-body\" id=\"userbody\">\r\n        <div class=\"card\" *ngFor=\"let users of c_user_list\" style=\"margin-bottom: 5px;\">\r\n          <div class=\"card-body\">\r\n            <div class=\"row\">\r\n              <span class=\"col-sm-12\">\r\n                  <h5>{{users.name}}</h5>\r\n              </span>\r\n              <button *ngIf=\"issuperadmin\" id=\"userdeleteBtn\" class=\"btn btn-primary btn-danger\" (click)=\"delete_user_channel(users.name)\" data-toggle=\"tooltip\" data-placement=\"top\" title=\"Delete Users\"><img id=\"userdeleteImg\" src=\"../assets/x-icon.png\"></button>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n\r\n<div class=\"modal fade\" id=\"add_user_channel\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"add_user_channelTitle\" aria-hidden=\"true\">\r\n    <div class=\"modal-dialog modal-dialog-centered\" role=\"document\">\r\n      <div class=\"modal-content\">\r\n        <form (submit)=\"addUserChannel($event)\">\r\n          <div class=\"modal-header\" id=\"cardhead\">\r\n            <h5 class=\"modal-title\" id=\"add_user_channelTitle\">Add Group User</h5>\r\n          </div>\r\n          <div class=\"modal-body\">\r\n            <div class=\"row\">\r\n              <div class= \"col-sm-12\">\r\n                User's Name:<br>\r\n                <input type=\"text\" [(ngModel)]='channelusername' name=\"channelusername\"><br>\r\n                <div *ngIf=\"cunamefalse\" id=\"errormessage\"><h4>Invalid input! Please enter valid user name</h4></div>\r\n                <div *ngIf=\"cuserfalse\" id=\"errormessage\"><h4>Unkown User! Please enter valid user name</h4></div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"modal-footer\">\r\n            <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">Cancel</button>\r\n            <button type=\"submit\" class=\"btn btn-primary\">Add User</button>\r\n          </div>\r\n        </form>\r\n      </div>\r\n    </div>\r\n  </div>\r\n"

/***/ }),

/***/ "./src/app/channel/channel.component.ts":
/*!**********************************************!*\
  !*** ./src/app/channel/channel.component.ts ***!
  \**********************************************/
/*! exports provided: ChannelComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChannelComponent", function() { return ChannelComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _mongo_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../mongo.service */ "./src/app/mongo.service.ts");
/* harmony import */ var _file_system_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../file-system.service */ "./src/app/file-system.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ChannelComponent = /** @class */ (function () {
    function ChannelComponent(router, form, mongo, fs) {
        this.router = router;
        this.form = form;
        this.mongo = mongo;
        this.fs = fs;
        this.isgroupadmin = false;
        this.issuperadmin = false;
        this.cunamefalse = false;
        this.cuserfalse = false;
        this.user_list = [];
        this.c_user_list = [];
    }
    //this is on load
    ChannelComponent.prototype.ngOnInit = function () {
        this.get_channel();
        this.getUsers();
        //checks if the logged in user is either a group user or super user
        if (localStorage.getItem("roles").includes("Group_User")) {
            this.isgroupadmin = true;
        }
        else {
            this.isgroupadmin = false;
        }
        if (localStorage.getItem("roles").includes("Super_User")) {
            this.issuperadmin = true;
        }
        else {
            this.issuperadmin = false;
        }
    };
    //this sends you back to group page
    ChannelComponent.prototype.back = function () {
        this.router.navigateByUrl('/group');
    };
    //this sends a request to the server to get all channels
    ChannelComponent.prototype.get_channel = function () {
        var _this = this;
        this.fs.get_channel().subscribe(function (channel) {
            console.log("getting users");
            console.log(channel);
            for (var i = 0; i < channel.channels.length; i++) {
                if (channel.channels[i].channel_name == localStorage.getItem("channel_name")) {
                    _this.make_lists(channel.channels[i]);
                    return;
                }
            }
        });
    };
    // this makes a message list
    ChannelComponent.prototype.make_lists = function (channel) {
        this.channel = channel;
        this.message_list = channel.messages;
        for (var i = 0; i < channel.users.length; i++) {
            this.c_user_list.push({ name: channel.users[i] });
        }
        console.log(this.channel);
        console.log(this.user_list);
        console.log(this.message_list);
    };
    //add user to channel
    ChannelComponent.prototype.addUserChannel = function (event) {
        var _this = this;
        event.preventDefault();
        console.log("Adding user to " + this.channelusername + " channel");
        this.cureset();
        if (this.channelusername == "" || this.channelusername == null) {
            this.cunamefalse = true;
        }
        else {
            if (this.user_name_list.includes(this.channelusername)) {
                console.log("Adding user to " + this.channelusername + " group");
                this.fs.edit_channel(this.channelusername, localStorage.getItem("channel_name")).subscribe(function (channels) {
                    console.log(channels);
                    _this.c_user_list = [];
                    _this.get_channel();
                    _this.fs.edit_group(_this.channelusername, localStorage.getItem("group_name")).subscribe(function (groups) {
                    });
                });
                this.channelusername = '';
            }
            else {
                this.cuserfalse = true;
            }
        }
    };
    //this resets the error stat of the channel user form
    ChannelComponent.prototype.cureset = function () {
        this.cunamefalse = false;
        this.cuserfalse = false;
    };
    // sends a request to the server to get all users then puts them in a list.
    ChannelComponent.prototype.getUsers = function () {
        var _this = this;
        this.fs.get_users().subscribe(function (users) {
            console.log("getting users");
            console.log(users);
            _this.user_list = users.users;
            _this.user_name_list = [];
            for (var i = 0; i < users.users.length; i++) {
                _this.user_name_list.push(users.users[i].name);
            }
        });
    };
    //this sends a request to the server to delete a user from a channel
    ChannelComponent.prototype.delete_user_channel = function (users) {
        var _this = this;
        console.log("deleteing " + users + " from channel " + localStorage.getItem("channel_name"));
        this.fs.delete_channel_user(localStorage.getItem("channel_name"), users).subscribe(function (channels) {
            console.log(channels);
            for (var i = 0; i < _this.c_user_list.length; i++) {
                if (_this.c_user_list[i].name == users) {
                    _this.c_user_list.splice(i, 1);
                }
            }
        });
    };
    ChannelComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-channel',
            template: __webpack_require__(/*! ./channel.component.html */ "./src/app/channel/channel.component.html"),
            styles: [__webpack_require__(/*! ./channel.component.css */ "./src/app/channel/channel.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"], _mongo_service__WEBPACK_IMPORTED_MODULE_3__["MongoService"], _file_system_service__WEBPACK_IMPORTED_MODULE_4__["FileSystemService"]])
    ], ChannelComponent);
    return ChannelComponent;
}());



/***/ }),

/***/ "./src/app/file-system.service.ts":
/*!****************************************!*\
  !*** ./src/app/file-system.service.ts ***!
  \****************************************/
/*! exports provided: FileSystemService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FileSystemService", function() { return FileSystemService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var FileSystemService = /** @class */ (function () {
    function FileSystemService(http) {
        this.http = http;
    }
    //check if user exists
    FileSystemService.prototype.check_user = function (username, password) {
        return this.http.post('/api/auth', {
            username: username,
            password: password
        });
    };
    //get all users
    FileSystemService.prototype.get_users = function () {
        return this.http.get('/api/users', {});
    };
    //add a user
    FileSystemService.prototype.add_user = function (userOBJ) {
        return this.http.post('/api/users', {
            userOBJ: userOBJ
        });
    };
    //edit a user
    FileSystemService.prototype.edit_user = function (userObj) {
        return this.http.put('/api/users', {
            userObj: userObj
        });
    };
    //delete a user
    FileSystemService.prototype.delete_users = function (name) {
        return this.http.delete("/api/users/" + name, {});
    };
    //get all groups
    FileSystemService.prototype.get_groups = function () {
        return this.http.get('/api/groups', {});
    };
    //add a group
    FileSystemService.prototype.add_group = function (groupObj) {
        return this.http.post('/api/groups', {
            groupObj: groupObj
        });
    };
    //edits a group
    FileSystemService.prototype.edit_group = function (groupuser, groupname) {
        return this.http.put('/api/groups', {
            groupuser: groupuser,
            groupname: groupname
        });
    };
    //deletes a group
    FileSystemService.prototype.delete_group = function (name) {
        console.log(name);
        return this.http.delete("/api/groups/" + name, {});
    };
    //gets all channels
    FileSystemService.prototype.get_channels = function () {
        return this.http.get('/api/channels', {});
    };
    //gets a single channel
    FileSystemService.prototype.get_channel = function () {
        return this.http.get('/api/channels', {});
    };
    //adds a channel
    FileSystemService.prototype.add_channel = function (channel) {
        return this.http.post('/api/channels', {
            channelobj: channel
        });
    };
    //edits a channel
    FileSystemService.prototype.edit_channel = function (channeluser, channelname) {
        return this.http.put('/api/channels', {
            channeluser: channeluser,
            channelname: channelname
        });
    };
    //delets a channel
    FileSystemService.prototype.delete_channel = function (name) {
        return this.http.delete("/api/channels/" + name, {});
    };
    //to delete a user from a channel
    FileSystemService.prototype.delete_channel_user = function (channel, name) {
        return this.http.delete("/api/channels/" + channel + "/" + name, {});
    };
    //to delete a user from a group
    FileSystemService.prototype.delete_group_user = function (group, name) {
        return this.http.delete("/api/groups/" + group + "/" + name, {});
    };
    FileSystemService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], FileSystemService);
    return FileSystemService;
}());



/***/ }),

/***/ "./src/app/group/group.component.css":
/*!*******************************************!*\
  !*** ./src/app/group/group.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/group/group.component.html":
/*!********************************************!*\
  !*** ./src/app/group/group.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form (submit)=\"logoutUser($event)\">\r\n  <button id=\"logoutBtn\" class=\"btn btn-success btn-primary\" type=\"submit\">Log Out</button>\r\n</form>\r\n<div class=\"row\" style=\"margin-right: 0px;\">\r\n  <div class=\"col-sm-10\" id=\"groups\">\r\n    <div class=\"card\" id=\"card\">\r\n      <div class=\"card-header\" id=\"cardhead\">\r\n        <div class=\"row\">\r\n          <div class=\"col-sm-10\">\r\n              <h2>Groups:</h2>\r\n          </div>\r\n          <div class=\"col-sm-2\">\r\n              <span data-toggle=\"tooltip\" data-placement=\"top\" title=\"Add Groups\">\r\n                  <button *ngIf=\"isgroupadmin\" type=\"button\" class=\"btn btn-success btn-primary\" data-toggle=\"modal\" data-target=\"#add_group\">Add a group</button>\r\n                </span>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"card-body\" id=\"cardbody\">\r\n        <div class=\"row\">\r\n          <div class=\"col-sm-12\">\r\n            <div class='card' *ngFor=\"let group of combined_list\">\r\n              <div class=\"card-header\" id=\"cardhead\">\r\n                <div class=\"row\">\r\n                  <div class=\"col-sm-8\">\r\n                    <h3>\r\n                          {{group.name}}\r\n                    </h3>\r\n                  </div>\r\n                  <span *ngIf=\"isgroupadmin\" id=\"channelBtn\" class=\"col-sm-2\" data-toggle=\"tooltip\" data-placement=\"top\" title=\"Add Channel\"><button id=\"addchannel\" type=\"button\" class=\"btn btn-primary btn-success btn-block\" data-toggle=\"modal\" data-target=\"#add_channel\" (click)=\"adding_channel(group.id)\">Add Channel</button></span>\r\n                  <span *ngIf=\"isgroupadmin\" id=\"spandeleteBtn\" class=\"col-sm-1\" data-toggle=\"tooltip\" data-placement=\"top\" title=\"Group Users\"><button id=\"addUserBtn\" type=\"button\" class=\"btn btn-primary btn-success btn-block\" data-toggle=\"modal\" data-target=\"#user_group\" (click)=\"group_users(group.id,group.users)\"><img id=\"addUserImage\" src=\"../assets/iconperson.png\"></button></span>\r\n                  <span *ngIf=\"isgroupadmin\" id=\"spanaddBtn\" class=\"col-sm-1\" data-toggle=\"tooltip\" data-placement=\"top\" title=\"Delete Group\"><button (click)=\"delete_group(group.id)\" id=\"deleteBtn\" class=\"btn btn-primary btn-danger btn-block\"><img id=\"addUserImage\" src=\"../assets/x-icon.png\"></button></span>\r\n                </div>\r\n              </div>\r\n              <div class=\"card-body\">\r\n                <div *ngFor=\"let channel of group.channels\" class=\"row\" style=\"margin-bottom: 5px;\">\r\n                  <span class=\"col-sm-10\" id=\"channelBtn\"><button class='btn btn-info btn-block' (click)=\"openChannel(channel.name,group.name)\" style=\"padding-bottom: 10px;\">{{ channel.name }} </button></span>\r\n                  <span *ngIf=\"isgroupadmin\" class=\"col-sm-1\" id=\"spanaddBtn\" data-toggle=\"tooltip\" data-placement=\"top\" title=\"Channel Users\"><button id=\"addUserBtn\" type=\"button\" class=\"btn btn-primary btn-success btn-block\" data-toggle=\"modal\" data-target=\"#user_channel\" (click)=\"channel_users(channel.id, channel.users,group.id)\"><img id=\"addUserImage\" src=\"../assets/iconperson.png\"></button></span>\r\n                  <span *ngIf=\"isgroupadmin\" class=\"col-sm-1\" id=\"spandeleteBtn\"data-toggle=\"tooltip\" data-placement=\"top\" title=\"Delete Channels\"><button id=\"deleteBtn\" class=\"btn btn-primary btn-danger btn-block\" (click)=\"delete_channel(channel.id,channel.name)\"><img id=\"addUserImage\" src=\"../assets/x-icon.png\"></button></span>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"col-sm-2\" id=\"users\">\r\n    <div class=\"card\">\r\n      <div class=\"card-header\" id=\"cardhead\">\r\n        <div class=\"row\">\r\n          <div class=\"col-sm-12 text-center\">\r\n              <h3>Users:</h3>\r\n          </div>\r\n          <div class=\"col-sm-12\">\r\n              <span *ngIf=\"isgroupadmin\" data-toggle=\"modal\" data-target=\"#add_user\">\r\n                  <button type=\"button\" class=\"btn btn-block btn-success btn-primary\" data-toggle=\"tooltip\" data-placement=\"top\" title=\"Add user\">Add a User</button>\r\n              </span>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"card-body\" id=\"userbody\">\r\n        <div class=\"card\" *ngFor=\"let users of user_list\" style=\"margin-bottom: 5px;\">\r\n          <div class=\"card-body\">\r\n            <div class=\"row\">\r\n              <span class=\"col-sm-12\">\r\n                  <h5>{{users.name}}</h5>\r\n              </span>\r\n              <button *ngIf=\"issuperadmin\" id=\"userdeleteBtn\" class=\"btn btn-primary btn-danger\" (click)=\"delete_user(users._id)\" data-toggle=\"tooltip\" data-placement=\"top\" title=\"Delete Users\"><img id=\"userdeleteImg\" src=\"../assets/x-icon.png\"></button>\r\n              <span *ngIf=\"isgroupadmin\" data-toggle=\"modal\" data-target=\"#edit_user\">\r\n                <button id=\"usereditBtn\" class=\"btn btn-primary btn-secondary\" (click)=\"edit_user(users)\" data-toggle=\"tooltip\" data-placement=\"top\" title=\"Edit Users\"><img id=\"userdeleteImg\" src=\"../assets/icon-edit.png\"></button>\r\n              </span>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n\r\n\r\n<div class=\"modal fade\" id=\"add_user\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"add_userTitle\" aria-hidden=\"true\">\r\n  <div class=\"modal-dialog modal-dialog-centered\" role=\"document\">\r\n    <div class=\"modal-content\">\r\n      <form (submit)=\"addUser($event)\">\r\n        <div class=\"modal-header\" id=\"cardhead\">\r\n          <h5 class=\"modal-title\" id=\"add_userTitle\">Add User</h5>\r\n        </div>\r\n        <div class=\"modal-body\">\r\n                <div class=\"row\">\r\n                  <div class= \"col-sm-6\">\r\n                    Username:<br>\r\n                    <input type=\"text\" [(ngModel)]='username' name=\"username\" required><br>\r\n                    Email:<br>\r\n                    <input type=\"email\" [(ngModel)]='useremail' name=\"email\"><br>\r\n                  </div>\r\n                  <div class= \"col-sm-6\">\r\n                    Password:<br>\r\n                    <input type=\"password\" [(ngModel)]='userpassword' name=\"password\"><br>\r\n                    Roles:<br>\r\n                    <select name=\"roles\" [(ngModel)]='userrole'>\r\n                      <option value=\"User\">User</option>\r\n                      <option value=\"Group_User\">Group_User</option>\r\n                      <option *ngIf=\"issuperadmin\" value=\"Super_User\">Super_User</option>\r\n                    </select><br>\r\n                  </div>\r\n                </div>\r\n                <div *ngIf=\"unamefalse\" id=\"errormessage\"><h4>Invalid input! Please enter a user name</h4></div>\r\n                <div *ngIf=\"uemailfalse\" id=\"errormessage\"><h4>Invalid input! Please enter a user email</h4></div>\r\n        </div>\r\n        <div class=\"modal-footer\">\r\n              <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\" (click)=\"ureset()\">Cancel</button>\r\n              <button type=\"submit\" class=\"btn btn-success btn-primary\">Add User</button>\r\n        </div>\r\n      </form>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<div class=\"modal fade\" id=\"edit_user\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"edit_userTitle\" aria-hidden=\"true\">\r\n  <div class=\"modal-dialog modal-dialog-centered\" role=\"document\">\r\n    <div class=\"modal-content\">\r\n      <form (submit)=\"editUser($event)\">\r\n        <div class=\"modal-header\" id=\"cardhead\">\r\n          <h5 class=\"modal-title\" id=\"edit_userTitle\">Add User</h5>\r\n        </div>\r\n        <div class=\"modal-body\">\r\n                <div class=\"row\">\r\n                  <div class= \"col-sm-6\">\r\n                    Username:<br>\r\n                    <input type=\"text\" [(ngModel)]='editusername' name=\"username\"><br>\r\n                    Email:<br>\r\n                    <input type=\"email\" [(ngModel)]='edituseremail' name=\"email\"><br>\r\n                  </div>\r\n                  <div class= \"col-sm-6\">\r\n                    Password:<br>\r\n                    <input type=\"password\" [(ngModel)]='edituserpassword' name=\"password\"><br>\r\n                    Roles:<br>\r\n                    <select name=\"roles\" [(ngModel)]='edituserrole'>\r\n                      <option value=\"User\">User</option>\r\n                      <option value=\"Group_User\">Group_User</option>\r\n                      <option *ngIf=\"issuperadmin\" value=\"Super_User\">Super_User</option>\r\n                    </select><br>\r\n                  </div>\r\n                </div>\r\n                <div *ngIf=\"eunamefalse\" id=\"errormessage\"><h4>Invalid input! Please enter a user name</h4></div>\r\n                <div *ngIf=\"euemailfalse\" id=\"errormessage\"><h4>Invalid input! Please enter a user email</h4></div>\r\n        </div>\r\n        <div class=\"modal-footer\">\r\n              <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\" (click)=\"eureset()\">Cancel</button>\r\n              <button type=\"submit\" class=\"btn btn-success btn-primary\">Add User</button>\r\n        </div>\r\n      </form>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<div class=\"modal fade\" id=\"add_group\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"add_groupTitle\" aria-hidden=\"true\">\r\n    <div class=\"modal-dialog modal-dialog-centered\" role=\"document\">\r\n      <div class=\"modal-content\">\r\n        <form (submit)=\"addGroup($event)\">\r\n          <div class=\"modal-header\" id=\"cardhead\">\r\n            <h5 class=\"modal-title\" id=\"add_groupTitle\">Add Group</h5>\r\n          </div>\r\n          <div class=\"modal-body\">\r\n            <div class=\"row\">\r\n              <div class= \"col-sm-12\">\r\n                Group Name:<br>\r\n                <input type=\"text\" [(ngModel)]='groupname' name=\"groupname\"><br>\r\n                <div *ngIf=\"gnamefalse\" id=\"errormessage\"><h4>Invalid input! Please enter a group name</h4></div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"modal-footer\">\r\n            <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\" (click)=\"greset()\">Cancel</button>\r\n            <button type=\"submit\" class=\"btn btn-success btn-primary\">Add Group</button>\r\n          </div>\r\n        </form>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n\r\n<div class=\"modal fade\" id=\"add_channel\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"add_channelTitle\" aria-hidden=\"true\">\r\n  <div class=\"modal-dialog modal-dialog-centered\" role=\"document\">\r\n    <div class=\"modal-content\">\r\n      <form (submit)=\"addChannel($event)\">\r\n        <div class=\"modal-header\" id=\"cardhead\">\r\n          <h5 class=\"modal-title\" id=\"add_channelTitle\">Add Channel</h5>\r\n        </div>\r\n        <div class=\"modal-body\">\r\n          <div class=\"row\">\r\n            <div class= \"col-sm-12\">\r\n              Channel Name:<br>\r\n              <input type=\"text\" [(ngModel)]='channelname' name=\"channelname\"><br>\r\n              <div *ngIf=\"cnamefalse\" id=\"errormessage\"><h4>Invalid input! Please enter a channel name</h4></div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"modal-footer\">\r\n          <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\" (click)=\"creset()\">Cancel</button>\r\n          <button type=\"submit\" class=\"btn btn-success btn-primary\" >Add Channel</button>\r\n        </div>\r\n      </form>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<div class=\"modal fade\" id=\"user_channel\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"user_channelTitle\" aria-hidden=\"true\">\r\n  <div class=\"modal-dialog modal-dialog-centered\" role=\"document\">\r\n    <div class=\"modal-content\">\r\n        <div class=\"modal-header\" id=\"cardhead\">\r\n          <h5 class=\"modal-title\" id=\"user_channelTitle\">User's of Channel</h5>\r\n        </div>\r\n        <div class=\"modal-body\">\r\n          <div class=\"conatiner-fluid\" id=\"useraddDiv\">\r\n            <form (submit)=\"addUserChannel($event)\" class=\"text-center\">\r\n                <input type=\"text\" [(ngModel)]='channelusername' name=\"channeusername\">\r\n              <span><button id=\"useraddBtn\" type=\"submit\" class=\"btn btn-success btn-primary\">Add User</button></span>\r\n            </form>\r\n            <div *ngIf=\"cunamefalse\" id=\"errormessage\"><h4>Invalid input! Please enter valid user name</h4></div>\r\n            <div *ngIf=\"cuserfalse\" id=\"errormessage\"><h4>Unkown User! Please enter valid user name</h4></div>\r\n          </div>\r\n          <div class=\"card\" *ngFor=\"let users of c_user_list\" style=\"margin-bottom: 5px;\">\r\n            <div class=\"card-body\">\r\n              <div class=\"row\">\r\n                <span class=\"col-sm-12\">\r\n                    <h5>{{users}}</h5>\r\n                </span>\r\n                <button *ngIf=\"isgroupadmin\" id=\"userdeleteBtn\" class=\"btn btn-primary btn-danger\" (click)=\"delete_user_channel(users)\"><img id=\"userdeleteImg\" src=\"../assets/x-icon.png\"></button>\r\n              </div>\r\n            </div>\r\n          </div>\r\n      </div>\r\n      <div class=\"modal-footer\">\r\n        <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\" (click)=\"cureset()\">Cancel</button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<div class=\"modal fade\" id=\"user_group\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"user_groupTitle\" aria-hidden=\"true\">\r\n  <div class=\"modal-dialog modal-dialog-centered\" role=\"document\">\r\n    <div class=\"modal-content\">\r\n        <div class=\"modal-header\" id=\"cardhead\">\r\n          <h5 class=\"modal-title\" id=\"user_groupTitle\">User's of group: {{group_id}}</h5>\r\n        </div>\r\n        <div class=\"modal-body\">\r\n          <div class=\"conatiner-fluid\" id=\"useraddDiv\">\r\n            <form (submit)=\"addUserGroup($event)\" class=\"text-center\">\r\n              <input type=\"text\" [(ngModel)]='groupusername' name=\"groupusername\">\r\n              <span><button id=\"useraddBtn\" type=\"submit\" class=\"btn btn-success btn-primary\">Add User</button></span>\r\n            </form>\r\n            <div *ngIf=\"gunamefalse\" id=\"errormessage\"><h4>invalid Input! Please enter valid user name</h4></div>\r\n            <div *ngIf=\"guserfalse\" id=\"errormessage\"><h4>Unkown User! Please enter valid user name</h4></div>\r\n          </div>\r\n          <div id=\"usercard\">\r\n            <div class=\"card\" *ngFor=\"let users of g_user_list\" style=\"margin-bottom: 5px;\">\r\n              <div class=\"card-body\">\r\n                <div class=\"row\">\r\n                  <span class=\"col-sm-12\">\r\n                    <h5>{{users}}</h5>\r\n                  </span>\r\n                  <button *ngIf=\"isgroupadmin\" id=\"userdeleteBtn\" class=\"btn btn-primary btn-danger\" (click)=\"delete_user_group(users)\"><img id=\"userdeleteImg\" src=\"../assets/x-icon.png\"></button>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"modal-footer\">\r\n          <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\" (click)=\"gureset()\">Cancel</button>\r\n        </div>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/group/group.component.ts":
/*!******************************************!*\
  !*** ./src/app/group/group.component.ts ***!
  \******************************************/
/*! exports provided: GroupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GroupComponent", function() { return GroupComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _mongo_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../mongo.service */ "./src/app/mongo.service.ts");
/* harmony import */ var _file_system_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../file-system.service */ "./src/app/file-system.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var GroupComponent = /** @class */ (function () {
    function GroupComponent(router, form, mongo, fs) {
        this.router = router;
        this.form = form;
        this.mongo = mongo;
        this.fs = fs;
        this.isgroupadmin = false;
        this.issuperadmin = false;
        this.unamefalse = false;
        this.uemailfalse = false;
        this.gnamefalse = false;
        this.cnamefalse = false;
        this.cunamefalse = false;
        this.gunamefalse = false;
        this.cuserfalse = false;
        this.guserfalse = false;
        this.euemailfalse = false;
        this.eunamefalse = false;
        this.username = '';
        this.useremail = '';
        this.userpassword = '';
        this.userrole = 'User';
    }
    GroupComponent.prototype.ngOnInit = function () {
        //does these on page load.
        this.getGroups();
        this.getUsers();
        //checks if the logged in user is either a group user or super user
        if (localStorage.getItem("roles").includes("Group_User")) {
            this.isgroupadmin = true;
        }
        else {
            this.isgroupadmin = false;
        }
        if (localStorage.getItem("roles").includes("Super_User")) {
            this.issuperadmin = true;
        }
        else {
            this.issuperadmin = false;
        }
    };
    //logs out the users and deletes the username and roles from the localstorage
    GroupComponent.prototype.logoutUser = function (event) {
        event.preventDefault();
        localStorage.removeItem("username");
        localStorage.removeItem("roles");
        this.router.navigateByUrl('/login');
    };
    //sets the channel clicked on and sends you to the channel page
    GroupComponent.prototype.openChannel = function (channel, group) {
        localStorage.setItem("channel_name", channel);
        localStorage.setItem("group_name", group);
        this.router.navigateByUrl('/channel');
    };
    //add a user by sending object to fileservice that will send that data to server. checks if name and email is blank.
    GroupComponent.prototype.addUser = function (event) {
        var _this = this;
        event.preventDefault();
        this.ureset();
        console.log("adding user");
        if (this.username == "" || this.username == null) {
            if (this.useremail == "" || this.useremail == null) {
                this.uemailfalse = true;
            }
            this.unamefalse = true;
        }
        else if (this.useremail == "" || this.useremail == null) {
            this.uemailfalse = true;
        }
        else {
            if (this.userrole == "Super_User") {
                this.userroles = ["User", "Group_User", this.userrole];
                this.userOBJ = { name: this.username, password: this.userpassword, email: this.useremail, roles: this.userroles };
                this.mongo.add_user(this.userOBJ).subscribe(function (users) {
                    if (users.success == false) {
                        alert("user already exists");
                    }
                    else {
                        _this.getUsers();
                        _this.clearUserData();
                    }
                });
            }
            else if (this.userrole == "Group_User") {
                this.userroles = ["User", this.userrole];
                this.userOBJ = { name: this.username, password: this.userpassword, email: this.useremail, roles: this.userroles };
                this.mongo.add_user(this.userOBJ).subscribe(function (users) {
                    if (users.success == false) {
                        alert("user already exists");
                    }
                    else {
                        _this.getUsers();
                        _this.clearUserData();
                    }
                });
            }
            else {
                this.userOBJ = { name: this.username, password: this.userpassword, email: this.useremail, roles: [this.userrole] };
                this.mongo.add_user(this.userOBJ).subscribe(function (users) {
                    if (users.success == false) {
                        alert("user already exists");
                    }
                    else {
                        _this.getUsers();
                        _this.clearUserData();
                    }
                });
            }
        }
    };
    //add a group, checks if the name is blank then sends request to server.
    GroupComponent.prototype.addGroup = function (event) {
        var _this = this;
        event.preventDefault();
        this.greset();
        if (this.groupname == "" || this.groupname == null) {
            this.gnamefalse = true;
        }
        else {
            var groupObj = { group_name: this.groupname, users: [localStorage.getItem("username")] };
            this.mongo.add_group(groupObj).subscribe(function (groups) {
                if (groups.success == false) {
                    alert("group already exists");
                }
                else {
                    _this.getGroups();
                    _this.groupname = '';
                }
            });
        }
    };
    // sends a request to the server to get all users then puts them in a list.
    GroupComponent.prototype.getUsers = function () {
        var _this = this;
        this.mongo.get_users().subscribe(function (users) {
            console.log("getting users");
            console.log(users.users);
            _this.user_list = users.users;
            _this.user_name_list = [];
            for (var i = 0; i < users.users.length; i++) {
                console.log("users are: " + users.users[i].name);
                _this.user_name_list.push(users.users[i].name);
            }
        });
    };
    //sends a request to the server to get all groups then puts them in a list.
    GroupComponent.prototype.getGroups = function () {
        var _this = this;
        this.fs.get_groups().subscribe(function (groups) {
            console.log(groups);
            _this.getChannels(groups);
        });
    };
    //sends a request to the server to get all channels then puts them in a list
    GroupComponent.prototype.getChannels = function (groups) {
        var _this = this;
        this.mongo.get_channels().subscribe(function (channels) {
            console.log(channels);
            _this.list_creation(groups, channels);
        });
    };
    //create a list from the getGroups and getChannels.
    GroupComponent.prototype.list_creation = function (groups, channels) {
        var arr = [];
        for (var i = 0; i < groups.groups.length; i++) {
            var groupusers = groups.groups[i].users;
            if (groupusers.includes(localStorage.getItem("username")) || localStorage.getItem("roles").includes('super_admin')) {
                var obj = {
                    id: groups.groups[i]._id,
                    name: groups.groups[i].group_name,
                    channels: [],
                    users: groups.groups[i].users
                };
                for (var j = 0; j < channels.channels.length; j++) {
                    if (groups.groups[i]._id == channels.channels[j].group_id) {
                        var lst = channels.channels[j].users;
                        if (lst.includes(localStorage.getItem("username")) || localStorage.getItem("roles").includes('Super_User') || localStorage.getItem("roles").includes('Group_User')) {
                            obj.channels.push({
                                id: channels.channels[j]._id,
                                name: channels.channels[j].channel_name,
                                users: channels.channels[j].users
                            });
                        }
                    }
                }
                arr.push(obj);
            }
        }
        this.combined_list = arr;
        this.group_list = groups.groups;
        this.channel_list = channels.channels;
        console.log(arr);
    };
    //sends a request to the server to delete a group
    GroupComponent.prototype.delete_group = function (id) {
        var _this = this;
        console.log("delete group " + id);
        this.mongo.delete_group(id).subscribe(function (groups) {
            console.log(groups);
            _this.getGroups();
        });
    };
    // sends a request to the server to delete a user
    GroupComponent.prototype.delete_user = function (id) {
        var _this = this;
        this.mongo.delete_users(id).subscribe(function (users) {
            console.log(users);
            _this.getUsers();
        });
    };
    //sets the group name to local storage so it can be accessed later
    GroupComponent.prototype.adding_channel = function (name) {
        this.group_id = name;
    };
    //this function sets group name channel name and sets the user list to users so it can be displayed in a modal
    GroupComponent.prototype.channel_users = function (channelid, users, groupid) {
        this.channel_id = channelid;
        this.group_id = groupid;
        this.c_user_list = users;
    };
    //this function sets the group name and the use list of the group so it can be displayed in a modal
    GroupComponent.prototype.group_users = function (groupid, users) {
        this.group_id = groupid;
        this.g_user_list = users;
    };
    //this function clears the data a form would hold.
    GroupComponent.prototype.clearUserData = function () {
        this.userpassword = '';
        this.useremail = '';
        this.username = '';
        this.userrole = 'User';
        this.userroles = [];
    };
    //this sends a request to the server to delete a channel
    GroupComponent.prototype.delete_channel = function (id, name) {
        var _this = this;
        console.log("delete channel " + name);
        this.fs.delete_channel(id).subscribe(function (channels) {
            console.log(channels);
            _this.getGroups();
        });
    };
    //this sends a request to the server to add a channel
    GroupComponent.prototype.addChannel = function (event) {
        var _this = this;
        event.preventDefault();
        this.creset();
        if (this.channelname == "" || this.channelname == null) {
            this.cnamefalse = true;
        }
        else {
            var channelObj = { channel_name: this.channelname, group_id: this.group_id, users: [localStorage.getItem("username")] };
            this.fs.add_channel(channelObj).subscribe(function (channels) {
                console.log(channels);
                if (channels.success == false) {
                    alert("channel already exists");
                }
                else {
                    _this.channelname = "";
                    _this.getGroups();
                }
            });
        }
    };
    //this sends a request to the server to add a user to a group
    GroupComponent.prototype.addUserGroup = function (event) {
        var _this = this;
        event.preventDefault();
        this.gureset();
        if (this.groupusername == "" || this.groupusername == null) {
            this.gunamefalse = true;
        }
        else {
            if (this.user_name_list.includes(this.groupusername)) {
                this.mongo.edit_group(this.groupusername, this.group_id).subscribe(function (groups) {
                    console.log(groups);
                    if (_this.g_user_list.includes(_this.groupusername)) {
                    }
                    else {
                        _this.g_user_list.push(_this.groupusername);
                    }
                    _this.getGroups();
                    _this.groupusername = "";
                });
            }
            else {
                this.guserfalse = true;
            }
        }
    };
    //this sends a request to the server to add a user to a channel
    GroupComponent.prototype.addUserChannel = function (event) {
        var _this = this;
        event.preventDefault();
        this.cureset();
        if (this.channelusername == "" || this.channelusername == null) {
            this.cunamefalse = true;
        }
        else {
            if (this.user_name_list.includes(this.channelusername)) {
                console.log("Adding user to " + this.channelusername + " group");
                this.mongo.edit_channel(this.channelusername, this.channel_id).subscribe(function (channels) {
                    console.log(channels);
                    //if user already exists in channel
                    if (_this.c_user_list.includes(_this.channelusername)) {
                    }
                    else {
                        _this.c_user_list.push(_this.channelusername);
                    }
                    _this.mongo.edit_group(_this.channelusername, _this.group_id).subscribe(function (groups) {
                        _this.getGroups();
                    });
                    _this.channelusername = "";
                });
            }
            else {
                this.cuserfalse = true;
            }
        }
    };
    //this sends a request to the server to delete a user from a channel
    GroupComponent.prototype.delete_user_channel = function (users) {
        var _this = this;
        this.mongo.delete_channel_user(this.channel_id, users).subscribe(function (channels) {
            _this.getGroups();
            for (var i = 0; i < _this.c_user_list.length; i++) {
                if (_this.c_user_list[i] == users) {
                    _this.c_user_list.splice(i, 1);
                }
            }
        });
    };
    //this sends a request to the server to delete a user from a group
    GroupComponent.prototype.delete_user_group = function (users) {
        var _this = this;
        this.mongo.delete_group_user(this.group_id, users).subscribe(function (channels) {
            _this.getGroups();
            for (var i = 0; i < _this.g_user_list.length; i++) {
                if (_this.g_user_list[i] == users) {
                    _this.g_user_list.splice(i, 1);
                }
            }
        });
    };
    //this resets the error stat of the group user form
    GroupComponent.prototype.gureset = function () {
        this.gunamefalse = false;
        this.guserfalse = false;
    };
    //this resets the error stat of the channel user form
    GroupComponent.prototype.cureset = function () {
        this.cunamefalse = false;
        this.cuserfalse = false;
    };
    //this resets the error stat of the user form
    GroupComponent.prototype.ureset = function () {
        this.uemailfalse = false;
        this.unamefalse = false;
    };
    //this resets the error stat of the group form
    GroupComponent.prototype.greset = function () {
        this.gnamefalse = false;
    };
    //this resets the error stat of the channel form
    GroupComponent.prototype.creset = function () {
        this.cnamefalse = false;
    };
    //this resets the error stat of the edit user form
    GroupComponent.prototype.eureset = function () {
        this.euemailfalse = false;
        this.eunamefalse = false;
    };
    //this sets the user info of the user clicked when going to edit a us
    GroupComponent.prototype.edit_user = function (user) {
        this.userid = user._id;
        this.editusername = user.name;
        this.edituseremail = user.email;
        this.edituserpassword = user.password;
        this.edituserrole = user.roles[user.roles.length - 1];
    };
    //this sends a request to the server to update a user info
    GroupComponent.prototype.editUser = function (event) {
        var _this = this;
        event.preventDefault();
        this.eureset();
        console.log("adding user");
        if (this.editusername == "" || this.editusername == null) {
            if (this.edituseremail == "" || this.edituseremail == null) {
                this.euemailfalse = true;
            }
            this.eunamefalse = true;
        }
        else if (this.edituseremail == "" || this.edituseremail == null) {
            this.euemailfalse = true;
        }
        else {
            if (this.edituserrole == "Super_User") {
                this.edituserroles = ["User", "Group_User", this.edituserrole];
                this.userOBJ = { id: this.userid, name: this.editusername, password: this.edituserpassword, email: this.edituseremail, roles: this.edituserroles };
                this.mongo.edit_user(this.userOBJ).subscribe(function (users) {
                    if (users.success == false) {
                        alert("user already exists");
                    }
                    else {
                        _this.getUsers();
                        _this.clearUserData();
                    }
                });
            }
            else if (this.edituserrole == "Group_User") {
                this.edituserroles = ["User", this.edituserrole];
                this.userOBJ = { id: this.userid, name: this.editusername, password: this.edituserpassword, email: this.edituseremail, roles: this.edituserroles };
                this.mongo.edit_user(this.userOBJ).subscribe(function (users) {
                    if (users.success == false) {
                        alert("user already exists");
                    }
                    else {
                        _this.getUsers();
                        _this.clearUserData();
                    }
                });
            }
            else {
                this.userOBJ = { id: this.userid, name: this.editusername, password: this.edituserpassword, email: this.edituseremail, roles: [this.edituserrole] };
                this.mongo.edit_user(this.userOBJ).subscribe(function (users) {
                    if (users.success == false) {
                        alert("user already exists");
                    }
                    else {
                        _this.getUsers();
                        _this.clearUserData();
                    }
                });
            }
        }
    };
    GroupComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-group',
            template: __webpack_require__(/*! ./group.component.html */ "./src/app/group/group.component.html"),
            styles: [__webpack_require__(/*! ./group.component.css */ "./src/app/group/group.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"], _mongo_service__WEBPACK_IMPORTED_MODULE_3__["MongoService"], _file_system_service__WEBPACK_IMPORTED_MODULE_4__["FileSystemService"]])
    ], GroupComponent);
    return GroupComponent;
}());



/***/ }),

/***/ "./src/app/login/login.component.css":
/*!*******************************************!*\
  !*** ./src/app/login/login.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/login/login.component.html":
/*!********************************************!*\
  !*** ./src/app/login/login.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\" id=\"secondpageHeader\">\r\n</div>\r\n<div class=\"row\" style=\"margin-right: 0px\">\r\n  <div class=\"col-sm-3\">\r\n  </div>\r\n  <div class=\"col-sm-6\">\r\n    <div class=\"card\" id=\"logincard\">\r\n      <form (submit)=\"loginUser($event)\">\r\n        <div class=\"card-body text-center\">\r\n          <span><h2>Log into Chat</h2></span><br>\r\n          <h4>Username:</h4>\r\n          <span><input placeholder=\"Username\" [(ngModel)]='username' name=\"username\" id=\"username\"></span><br>\r\n          <h4>Password:</h4>\r\n          <span><input type=\"password\" placeholder=\"Password\" [(ngModel)]='password' name=\"password\" id=\"password\"></span>\r\n          <div *ngIf=\"isfalse\" id=\"errormessage\"><h4>Unauthorized User</h4></div>\r\n        </div>\r\n        <div class=\"card-footer\">\r\n            <button type=\"submit\" class=\"btn btn-success btn-block\">Login</button>\r\n        </div>\r\n      </form>\r\n    </div>\r\n  </div>\r\n  <div class=\"col-sm-3\">\r\n\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _mongo_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../mongo.service */ "./src/app/mongo.service.ts");
/* harmony import */ var _file_system_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../file-system.service */ "./src/app/file-system.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var LoginComponent = /** @class */ (function () {
    function LoginComponent(router, form, mongo, fs) {
        this.router = router;
        this.form = form;
        this.mongo = mongo;
        this.fs = fs;
        this.username = '';
        this.password = '';
    }
    LoginComponent.prototype.ngOnInit = function () {
        //if browser supports storage
        if (typeof (Storage) !== "undefined") {
            console.log("found");
        }
    };
    //checks the given username agaisnt the list of known users, logs in if same name found othwise gives warning.
    LoginComponent.prototype.loginUser = function (event) {
        var _this = this;
        event.preventDefault();
        this.fs.check_user(this.username, this.password).subscribe(function (data) {
            var result = data;
            //if the response from the server is true then log in.
            if (result.success == true) {
                localStorage.setItem("roles", result.username.roles);
                localStorage.setItem("username", _this.username);
                _this.router.navigateByUrl('/group');
                return;
            }
            //otherwise if response from server is false then give error message.
            _this.isfalse = true;
        });
    };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"], _mongo_service__WEBPACK_IMPORTED_MODULE_3__["MongoService"], _file_system_service__WEBPACK_IMPORTED_MODULE_4__["FileSystemService"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/mongo.service.ts":
/*!**********************************!*\
  !*** ./src/app/mongo.service.ts ***!
  \**********************************/
/*! exports provided: MongoService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MongoService", function() { return MongoService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MongoService = /** @class */ (function () {
    function MongoService(http) {
        this.http = http;
    }
    //get all users
    MongoService.prototype.get_users = function () {
        return this.http.get('/api/users', {});
    };
    //add a user
    MongoService.prototype.add_user = function (userOBJ) {
        return this.http.post('/api/users', {
            userOBJ: userOBJ
        });
    };
    //edit a user
    MongoService.prototype.edit_user = function (userObj) {
        return this.http.put('/api/users', {
            userObj: userObj
        });
    };
    //delete a user
    MongoService.prototype.delete_users = function (id) {
        return this.http.delete("/api/users/" + id, {});
    };
    //add a group
    MongoService.prototype.add_group = function (groupObj) {
        return this.http.post('/api/groups', {
            groupObj: groupObj
        });
    };
    //edits a group
    MongoService.prototype.edit_group = function (groupuser, groupid) {
        return this.http.put('/api/groups', {
            groupuser: groupuser,
            groupid: groupid
        });
    };
    //to delete a user from a group
    MongoService.prototype.delete_group_user = function (group, name) {
        return this.http.delete("/api/groups/" + group + "/" + name, {});
    };
    //deletes a group
    MongoService.prototype.delete_group = function (id) {
        console.log(id);
        return this.http.delete("/api/groups/" + id, {});
    };
    //gets all channels
    MongoService.prototype.get_channels = function () {
        return this.http.get('/api/channels', {});
    };
    //edits a channel
    MongoService.prototype.edit_channel = function (channeluser, channelid) {
        return this.http.put('/api/channels', {
            channeluser: channeluser,
            channelid: channelid
        });
    };
    //to delete a user from a channel
    MongoService.prototype.delete_channel_user = function (channel, name) {
        return this.http.delete("/api/channels/" + channel + "/" + name, {});
    };
    //delets a channel
    MongoService.prototype.delete_channel = function (id) {
        return this.http.delete("/api/channels/" + id, {});
    };
    MongoService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], MongoService);
    return MongoService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, for easier debugging, you can ignore zone related error
 * stack frames such as `zone.run`/`zoneDelegate.invokeTask` by importing the
 * below file. Don't forget to comment it out in production mode
 * because it will have a performance impact when errors are thrown
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Ben\Google Drive\3813ICT_Software_Framework\3813ICT_Software_Framework_Assignment_1\my-app\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map