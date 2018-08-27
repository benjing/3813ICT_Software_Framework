const express = require('express')
const app = express();
const path = require('path');
const http = require('http').Server(app);
const io = require('socket.io')(http);
const bodyParser = require("body-parser");
const fs = require('fs');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname , '../dist/my-app/')));


var mongoose = require('mongoose')

// const MongoClient = require('mongodb').MongoClient;
// const url = 'mongodb://localhost:27017';
const url = 'mongodb://localhost/test';
mongoose.connect(url, {poolSize:11}, function(err, client){

    if (err) {return console.log(err)}
    // const dbName = 'test';
    // const db = client.db(dbName);
    const db = mongoose.connection;
    require('./routes/login.js')(app,db,fs);
    require('./routes/group.js')(app,db,fs);
    require('./routes/channel.js')(app,db,fs);
    require('./routes.js')(app,path);
    require('./socket.js')(app,io);
    require('./listen.js')(http);
});