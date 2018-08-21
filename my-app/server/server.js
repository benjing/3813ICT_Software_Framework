const express = require('express')
const app = express();
const path = require('path');
const http = require('http').Server(app);
const io = require('socket.io')(http);
const bodyParser = require("body-parser");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname , '../dist/my-app/')));




const MongoClient = require('mongodb').MongoClient;
const url = 'mongodb://localhost:27017';
MongoClient.connect(url, {poolSize:11}, function(err, client){

    if (err) {return console.log(err)}
    const dbName = 'test';
    const db = client.db(dbName);
    require('./routes/login.js')(app,db);
    require('./routes/groups.js')(app,db);
    require('./routes/channels.js')(app,db);
    require('./routes.js')(app,path);
    require('./socket.js')(app,io);
    require('./listen.js')(http);
});