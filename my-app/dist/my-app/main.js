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

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<div style=\"text-align:center\">\n  <h1>\n    University Chat\n  </h1>\n</div>\n<router-outlet></router-outlet>\n\n"

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

module.exports = "<p>\n  channel works!\n</p>\n"

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
    }
    ChannelComponent.prototype.ngOnInit = function () {
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
    FileSystemService.prototype.check_user = function (username) {
        return this.http.post('/api/auth', {
            username: username
        });
    };
    FileSystemService.prototype.get_users = function () {
        return this.http.get('/api/users', {});
    };
    FileSystemService.prototype.add_user = function (userOBJ) {
        return this.http.post('/api/users', {
            userOBJ: userOBJ
        });
    };
    FileSystemService.prototype.edit_user = function () {
        return this.http.put('/api/users', {});
    };
    FileSystemService.prototype.delete_users = function () {
        return this.http.delete('/api/users', {});
    };
    FileSystemService.prototype.get_groups = function () {
        return this.http.get('/api/groups', {});
    };
    FileSystemService.prototype.add_group = function (groupObj) {
        return this.http.post('/api/groups', {
            groupObj: groupObj
        });
    };
    FileSystemService.prototype.edit_group = function (groupuser, groupname) {
        return this.http.put('/api/groups', {
            groupuser: groupuser,
            groupname: groupname
        });
    };
    FileSystemService.prototype.delete_group = function (name) {
        console.log(name);
        return this.http.delete("/api/groups/" + name, {});
    };
    FileSystemService.prototype.get_channels = function () {
        return this.http.get('/api/channels', {});
    };
    FileSystemService.prototype.add_channel = function (channel) {
        return this.http.post('/api/channels', {
            channelobj: channel
        });
    };
    FileSystemService.prototype.edit_channel = function (channeluser, channelname) {
        return this.http.put('/api/channels', {
            channeluser: channeluser,
            channelname: channelname
        });
    };
    FileSystemService.prototype.delete_channel = function () {
        return this.http.delete('/api/channels', {});
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

module.exports = "<p>\n  group works!\n</p>\n<form (submit)=\"logoutUser($event)\">\n  <button type=\"submit\">Log Out</button>\n</form>\n<h2>Groups:</h2>\n<div data-toggle=\"modal\" data-target=\"#add_user\">\n    <button type=\"button\" class=\"btn btn-primary\" data-toggle=\"tooltip\" data-placement=\"top\" title=\"Add user\">Add a User</button>\n</div>\n<button type=\"button\" class=\"btn btn-primary\" data-toggle=\"modal\" data-target=\"#add_group\">Add a group</button>\n<div class=\"row\">\n  <div class=\"col-sm-6\">\n    <div class='card' *ngFor=\"let group of combined_list\">\n      <div class=\"card-header row\">\n        <div class=\"col-sm-4\">\n          <h5>\n            {{group.name}}\n          </h5>\n        </div>\n        <div class=\"col-sm-4\" data-toggle=\"tooltip\" data-placement=\"top\" title=\"Add Channel\">\n            <button type=\"button\" class=\"btn btn-primary\" data-toggle=\"modal\" data-target=\"#add_channel\" (click)=\"adding_channel(group.name)\">Add Channel</button>\n            <span><button type=\"button\" class=\"btn btn-primary\" data-toggle=\"modal\" data-target=\"#add_user_group\" (click)=\"adding_channel(group.name)\">Add user to Channel</button></span>\n        </div>\n        <div class=\"col-sm-4\">\n            <button (click)=\"delete_group(group.name)\">delete group</button>\n        </div>\n      </div>\n      <div class=\"card-body\">\n        <div *ngFor=\"let channel of group.channels\">\n          <button class='btn btn-block btn-info' (click)=\"openChannel(channel.name)\">{{ channel.name }} </button>\n          <span><button (click)=\"delete_channel($event)\">delete channel</button></span>\n          <span><button type=\"button\" class=\"btn btn-primary\" data-toggle=\"modal\" data-target=\"#add_user_channel\" (click)=\"adding_user_channel(channel.name)\">Add user to Channel</button></span>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n<div class=\"modal fade\" id=\"add_user\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"add_userTitle\" aria-hidden=\"true\">\n  <div class=\"modal-dialog modal-dialog-centered\" role=\"document\">\n    <div class=\"modal-content\">\n      <form (submit)=\"addUser($event)\">\n        <div class=\"modal-header\">\n          <h5 class=\"modal-title\" id=\"add_userTitle\">Add User</h5>\n        </div>\n        <div class=\"modal-body\">\n                <div class=\"row\">\n                  <div class= \"col-sm-6\">\n                    Username:<br>\n                    <input type=\"text\" [(ngModel)]='username' name=\"username\"><br>\n                    Email:<br>\n                    <input type=\"email\" [(ngModel)]='useremail' name=\"email\"><br>\n                  </div>\n                  <div class= \"col-sm-6\">\n                    Roles:<br>\n                    <select name=\"roles\" [(ngModel)]='userrole'>\n                      <option value=\"User\">User</option>\n                      <option value=\"Group_User\">Group_User</option>\n                      <option value=\"Super_User\">Super_User</option>\n                    </select><br>\n                  </div>\n                </div>\n        </div>\n        <div class=\"modal-footer\">\n              <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">Cancel</button>\n              <button type=\"submit\" class=\"btn btn-primary\">Add User</button>\n        </div>\n      </form>\n    </div>\n  </div>\n</div>\n<div class=\"modal fade\" id=\"add_group\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"add_groupTitle\" aria-hidden=\"true\">\n    <div class=\"modal-dialog modal-dialog-centered\" role=\"document\">\n      <div class=\"modal-content\">\n        <form (submit)=\"addGroup($event)\">\n          <div class=\"modal-header\">\n            <h5 class=\"modal-title\" id=\"add_groupTitle\">Add Group</h5>\n          </div>\n          <div class=\"modal-body\">\n            <div class=\"row\">\n              <div class= \"col-sm-6\">\n                Group Name:<br>\n                <input type=\"text\" [(ngModel)]='groupname' name=\"groupname\"><br>\n              </div>\n            </div>\n          </div>\n          <div class=\"modal-footer\">\n            <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">Cancel</button>\n            <button type=\"submit\" class=\"btn btn-primary\">Add Group</button>\n          </div>\n        </form>\n      </div>\n    </div>\n  </div>\n<div class=\"modal fade\" id=\"add_channel\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"add_channelTitle\" aria-hidden=\"true\">\n  <div class=\"modal-dialog modal-dialog-centered\" role=\"document\">\n    <div class=\"modal-content\">\n      <form (submit)=\"addChannel($event)\">\n        <div class=\"modal-header\">\n          <h5 class=\"modal-title\" id=\"add_channelTitle\">Add Channel</h5>\n        </div>\n        <div class=\"modal-body\">\n          <div class=\"row\">\n            <div class= \"col-sm-6\">\n              Channel Name:<br>\n              <input type=\"text\" [(ngModel)]='channelname' name=\"channelname\"><br>\n            </div>\n          </div>\n        </div>\n        <div class=\"modal-footer\">\n          <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">Cancel</button>\n          <button type=\"submit\" class=\"btn btn-primary\">Add Channel</button>\n        </div>\n      </form>\n    </div>\n  </div>\n</div>\n<div class=\"modal fade\" id=\"add_user_group\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"add_user_groupTitle\" aria-hidden=\"true\">\n  <div class=\"modal-dialog modal-dialog-centered\" role=\"document\">\n    <div class=\"modal-content\">\n      <form (submit)=\"addUserGroup($event)\">\n        <div class=\"modal-header\">\n          <h5 class=\"modal-title\" id=\"add_user_groupTitle\">Add Group User</h5>\n        </div>\n        <div class=\"modal-body\">\n          <div class=\"row\">\n            <div class= \"col-sm-6\">\n              User's Name:<br>\n              <input type=\"text\" [(ngModel)]='groupusername' name=\"groupusername\"><br>\n            </div>\n          </div>\n        </div>\n        <div class=\"modal-footer\">\n          <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">Cancel</button>\n          <button type=\"submit\" class=\"btn btn-primary\">Add User</button>\n        </div>\n      </form>\n    </div>\n  </div>\n</div>\n<div class=\"modal fade\" id=\"add_user_channel\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"add_user_channelTitle\" aria-hidden=\"true\">\n    <div class=\"modal-dialog modal-dialog-centered\" role=\"document\">\n      <div class=\"modal-content\">\n        <form (submit)=\"addUserChannel($event)\">\n          <div class=\"modal-header\">\n            <h5 class=\"modal-title\" id=\"add_user_channelTitle\">Add Group User</h5>\n          </div>\n          <div class=\"modal-body\">\n            <div class=\"row\">\n              <div class= \"col-sm-6\">\n                User's Name:<br>\n                <input type=\"text\" [(ngModel)]='channelusername' name=\"channelusername\"><br>\n              </div>\n            </div>\n          </div>\n          <div class=\"modal-footer\">\n            <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">Cancel</button>\n            <button type=\"submit\" class=\"btn btn-primary\">Add User</button>\n          </div>\n        </form>\n      </div>\n    </div>\n  </div>"

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
        this.username = '';
        this.useremail = '';
        this.userrole = 'User';
    }
    GroupComponent.prototype.ngOnInit = function () {
        this.getGroups();
        this.getUsers();
    };
    GroupComponent.prototype.logoutUser = function (event) {
        event.preventDefault();
        localStorage.removeItem("username");
        localStorage.removeItem("roles");
        this.router.navigateByUrl('/login');
    };
    GroupComponent.prototype.openChannel = function (channel) {
        localStorage.setItem("channel_name", channel);
        this.router.navigateByUrl('/channel');
    };
    GroupComponent.prototype.addUser = function (event) {
        var _this = this;
        event.preventDefault();
        console.log("adding user");
        if (this.userrole == "Super_User") {
            this.userroles = ["User", "Group_User", this.userrole];
            this.userOBJ = { name: this.username, email: this.useremail, roles: this.userroles };
            this.fs.add_user(this.userOBJ).subscribe(function (users) {
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
            this.userOBJ = { name: this.username, email: this.useremail, roles: this.userroles };
            this.fs.add_user(this.userOBJ).subscribe(function (users) {
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
            this.userOBJ = { name: this.username, email: this.useremail, roles: [this.userrole] };
            this.fs.add_user(this.userOBJ).subscribe(function (users) {
                if (users.success == false) {
                    alert("user already exists");
                }
                else {
                    _this.getUsers();
                    _this.clearUserData();
                }
            });
        }
    };
    GroupComponent.prototype.addGroup = function (event) {
        var _this = this;
        event.preventDefault();
        var groupObj = { group_name: this.groupname, users: [localStorage.getItem("username")] };
        this.fs.add_group(groupObj).subscribe(function (groups) {
            if (groups.success == false) {
                alert("group already exists");
            }
            else {
                _this.getGroups();
                _this.groupname = '';
            }
        });
    };
    GroupComponent.prototype.getUsers = function () {
        var _this = this;
        this.fs.get_users().subscribe(function (users) {
            console.log("getting users");
            console.log(users);
            _this.user_list = users.users;
        });
    };
    GroupComponent.prototype.getGroups = function () {
        var _this = this;
        this.fs.get_groups().subscribe(function (groups) {
            console.log(groups);
            _this.getChannels(groups);
        });
    };
    GroupComponent.prototype.getChannels = function (groups) {
        var _this = this;
        this.fs.get_channels().subscribe(function (channels) {
            console.log(channels);
            _this.list_creation(groups, channels);
        });
    };
    GroupComponent.prototype.list_creation = function (groups, channels) {
        var arr = [];
        for (var i = 0; i < groups.groups.length; i++) {
            var groupusers = groups.groups[i].users;
            if (groupusers.includes(localStorage.getItem("username")) || localStorage.getItem("roles").includes('super_admin')) {
                var obj = {
                    name: groups.groups[i].group_name,
                    channels: []
                };
                for (var j = 0; j < channels.channels.length; j++) {
                    if (groups.groups[i].group_name == channels.channels[j].group_id) {
                        var lst = channels.channels[j].users;
                        if (lst.includes(localStorage.getItem("username")) || localStorage.getItem("roles").includes('super_admin') || localStorage.getItem("roles").includes('group_admin')) {
                            obj.channels.push({
                                id: channels.channels[j].channel_id,
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
    GroupComponent.prototype.delete_group = function (name) {
        var _this = this;
        console.log("delete group" + name);
        this.fs.delete_group(name).subscribe(function (groups) {
            console.log(groups);
            _this.getGroups();
        });
    };
    GroupComponent.prototype.adding_channel = function (name) {
        localStorage.setItem("group_name", name);
    };
    GroupComponent.prototype.adding_user_channel = function (name) {
        console.log(name);
        localStorage.setItem("channel_name", name);
    };
    GroupComponent.prototype.clearUserData = function () {
        this.useremail = '';
        this.username = '';
        this.userrole = 'User';
        this.userroles = [];
    };
    GroupComponent.prototype.delete_channel = function (event) {
        event.preventDefault();
        console.log("delete channel");
    };
    GroupComponent.prototype.addChannel = function (event) {
        var _this = this;
        event.preventDefault();
        console.log("add channel");
        var channelObj = { channel_name: this.channelname, group_id: localStorage.getItem("group_name"), users: [localStorage.getItem("username")] };
        this.fs.add_channel(channelObj).subscribe(function (channels) {
            console.log(channels);
            if (channels.success == false) {
                alert("channel already exists");
            }
            else {
                _this.getGroups();
                _this.channelname = '';
                localStorage.removeItem("group_name");
            }
        });
    };
    GroupComponent.prototype.addUserGroup = function (event) {
        var _this = this;
        event.preventDefault();
        console.log("Adding user to " + this.groupusername + " group");
        this.fs.edit_group(this.groupusername, localStorage.getItem("group_name")).subscribe(function (groups) {
            console.log(groups);
            _this.groupusername = "";
        });
    };
    GroupComponent.prototype.addUserChannel = function (event) {
        var _this = this;
        event.preventDefault();
        console.log("Adding user to " + this.channelusername + " group");
        this.fs.edit_channel(this.channelusername, localStorage.getItem("channel_name")).subscribe(function (channels) {
            console.log(channels);
            _this.channelname = "";
        });
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

module.exports = "<p>\n  login works!\n</p>\n<form (submit)=\"loginUser($event)\">\n  <input placeholder=\"Username\" [(ngModel)]='username' name=\"username\" id=\"username\">\n  <button type=\"submit\">Login</button>\n</form>\n"

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
    }
    LoginComponent.prototype.ngOnInit = function () {
        if (typeof (Storage) !== "undefined") {
            console.log("found");
        }
    };
    LoginComponent.prototype.loginUser = function (event) {
        var _this = this;
        event.preventDefault();
        this.fs.check_user(this.username).subscribe(function (data) {
            console.log(data);
            var result = data;
            if (result.success == true) {
                localStorage.setItem("roles", result.username[0].roles);
                localStorage.setItem("username", _this.username);
                _this.router.navigateByUrl('/group');
                return;
            }
            alert("Unkown User");
        });
        // localStorage.setItem("username", this.username);
        // this.router.navigateByUrl('/group')
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
    MongoService.prototype.see_users = function () {
        return this.http.post('/api/auth', {});
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