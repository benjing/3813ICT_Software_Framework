const express = require('express')
const app = express();
const path = require('path');
const http = require('http').Server(app);
const io = require('socket.io')(http);
const formidable = require('formidable');
const bodyParser = require("body-parser");
app.use (bodyParser.json());
app.use (bodyParser.urlencoded({extended:false}));
app.use(express.static(path.join(__dirname , '../dist/my-app')));
app.use('/images',express.static(path.join(__dirname , './userimages')));
const fs = require('fs');


// var mongoose = require('mongoose')

const MongoClient = require('mongodb').MongoClient;
const url = 'mongodb://localhost:27017';
// const url = 'mongodb://localhost/test';
// mongoose.connect(url, {poolSize:11}, function(err, client){
MongoClient.connect(url,{poolsize:10},function(err, client){

    if (err) {return console.log(err)}
    const dbName = 'test';
    const db = client.db(dbName);
    // const db = mongoose.connection;
    require('./imageuploads.js')(app,formidable);
    require('./routes/auth.js')(app,db,fs);
    require('./routes/user.js')(app,db,fs);
    require('./routes/group.js')(app,db,fs);
    require('./routes/channel.js')(app,db,fs);
    require('./socket.js')(app,io);
    require('./listen.js')(http);
});