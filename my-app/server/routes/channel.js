var ObjectId = require('mongodb').ObjectID;
module.exports = function(app,db,fs){
    console.log("channels started")
    //gets all channels then send it back to client
    app.get('/api/channels', ( req , res ) => {
        const assert = require('assert')

        const collection = db.collection("channels");
        //gets all channels
        collection.find({}).toArray(function(err, channels) {
            assert.equal(err, null);
            console.log("Found the following channels: "+channels);
            //sends all channels
            res.send({channels})
        });
    });
    //adds a channel
    app.post('/api/channels', (req,res) =>{
        console.log(req.body.channelobj)
        const collection = db.collection("channels");
        // Insert a document
        collection.insertOne(
            {channel_name : req.body.channelobj.channel_name,group_id:req.body.channelobj.group_id, users:req.body.channelobj.users,messages:[]}
            ,function(err,channels){
                //gives back the id and success true
                res.send({"channels":channels.ops[0]._id,"success":true})
            })
    })
    // adds a user to the channel
    app.put('/api/channels', (req,res)=>{
        console.log(req.body)
        const assert = require('assert')

        const collection = db.collection("channels");
        //adding a user to the channel with the given id
        collection.updateOne({"_id": ObjectId(req.body.channelid)}, 
        { $addToSet: { users: req.body.channeluser } }, function(err, result) {
            
            assert.equal(err, null);
            //send success
            res.send({"message":result,"success":true})
        });
    })
    //gets the request from the client then gets that name and searchs the channels array for it then deletes that channel
    app.delete('/api/channels/:id', (req,res) =>{
        console.log(req.params)
        const assert = require('assert')
        const collection = db.collection("channels");
        //deletes the channel matching the given id
        collection.deleteOne({"_id": ObjectId(req.params.id)}, function(err, result) {
            assert.equal(err, null);
            //send success
            res.send({"message":result,"success":true})
        });
    })
    //deletes users from the channel
    app.delete('/api/channels/:channel/:name', (req,res) =>{
        console.log(req.params)
        const assert = require('assert')

        const collection = db.collection("channels");
        //deletes a user from the channel with a certain id
        collection.updateOne({"_id": ObjectId(req.params.channel)}, 
        { $pull: { users: req.params.name } }, function(err, result) {
            
            assert.equal(err, null);
            //send success
            res.send({"message":result,"success":true})
        });
    })
    //adds message to the channel
    app.put('/api/channels/message',(req,res)=>{
        console.log(req.body)
        const assert = require('assert')

        const collection = db.collection("channels");
        //adds a message to the channel with a certain id
        collection.updateOne({"_id": ObjectId(req.body.id)}, 
        { $push: { messages: req.body.message } }, function(err, result) {
            
            assert.equal(err, null);
            //send success
            res.send({"message":result})
        });
    })
}