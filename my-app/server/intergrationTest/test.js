var http = require('http');
var assert = require('assert');
var chai = require('chai');
var chaiHttp = require('chai-http');
chai.use(chaiHttp);

var api = `http://localhost:3000/api`;

describe('API Tests', function() {
  describe('auth test', function(){
    var testdata = {
      username:"test",
      password:"test"
    }
    it(' WRONG INPUT:should return false and no user info', function(done){
      chai.request(api)
            .post('/auth')
            .send(testdata)
            .end(function (err,res){
              var success = res.body.success
              var users = res.body.users
              assert.equal(success, false)
              assert.equal(users,"")
              done()
            })
    })
  }),
  describe('user test', function(){
    var temp_user_id = ""
    var testdata = {userOBJ:{
      name:"testing user",
      password:"testing user",
      email:"testing user",
      roles:["User"]
    }}
    it('create user should return true', function(done){
      chai.request(api)
            .post('/users')
            .send(testdata)
            .end(function (err,res){
              assert.equal(res.body.success, true)
              temp_user_id = res.body.users
              done()
            })
    })
    it('update user should return true', function(done){
      var testdata = {userObj:{
        id:temp_user_id,
        name:"change testing user",
        password:"testing user",
        email:"testing user",
        roles:["User"]
      }}
      chai.request(api)
            .put('/users')
            .send(testdata)
            .end(function (err,res){
              assert.equal(res.body.success, true)
              done()
            })
    })
    it('remove a user should return true', function(done) {
		  var dat = {
		    id : temp_user_id
		  }
      chai.request(api)
      .delete(`/users/${dat.id}`)
      .end(function (err, res) {
        assert.equal(res.body.success, true);
        done();
      });
    });
  })

  describe('group test', function(){
    var temp_group_id = ""
    var testdata = {groupObj:{
      group_name:"testing group",
      users:["testing user"]
    }}
    it('create group should return true', function(done){
      chai.request(api)
            .post('/groups')
            .send(testdata)
            .end(function (err,res){
              assert.equal(res.body.success, true)
              temp_group_id = res.body.groups
              done()
            })
    })
    it('add user to group should return true', function(done){
      var testdata = {
        groupid:temp_group_id,
        groupuser:"change testing group"
      }
      chai.request(api)
            .put('/groups')
            .send(testdata)
            .end(function (err,res){
              assert.equal(res.body.success, true)
              done()
            })
    })
    it('remove a user to group should return true', function(done) {
		  var dat = {
        id : temp_group_id,
        name: "change testing group"
		  }
      chai.request(api)
      .delete(`/groups/${dat.id}/${dat.name}`)
      .end(function (err, res) {
        assert.equal(res.body.success, true);
        done();
      });
    });
    it('remove a group should return true', function(done) {
		  var dat = {
		    id : temp_group_id
		  }
      chai.request(api)
      .delete(`/groups/${dat.id}`)
      .end(function (err, res) {
        assert.equal(res.body.success, true);
        done();
      });
    });
  })

  describe('channel test', function(){
    var temp_channel_id = ""
    var testdata = {channelobj:{
      channel_name:"testing channel",
      group_id:"01",
      users:["testing user"],
      messages:[]
    }}
    it('create channel should return true', function(done){
      chai.request(api)
            .post('/channels')
            .send(testdata)
            .end(function (err,res){
              assert.equal(res.body.success, true)
              temp_channel_id = res.body.channels
              done()
            })
    })
    it('add user to channel should return true', function(done){
      var testdata = {
        channelid:temp_channel_id,
        channeluser:"test channel user"
      }
      chai.request(api)
            .put('/channels')
            .send(testdata)
            .end(function (err,res){
              assert.equal(res.body.success, true)
              done()
            })
    })
    it('remove a user from channel should return true', function(done) {
		  var dat = {
        id : temp_channel_id,
        name: "test channel user"
		  }
      chai.request(api)
      .delete(`/channels/${dat.id}/${dat.name}`)
      .end(function (err, res) {
        assert.equal(res.body.success, true);
        done();
      });
    });
    it('remove a channel should return true', function(done) {
		  var dat = {
		    id : temp_channel_id
		  }
      chai.request(api)
      .delete(`/channels/${dat.id}`)
      .end(function (err, res) {
        assert.equal(res.body.success, true);
        done();
      });
    });
  })
})