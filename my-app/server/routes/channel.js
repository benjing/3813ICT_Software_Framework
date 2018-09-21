var ObjectId = require('mongodb').ObjectID;
module.exports = function(app,db,fs){
    console.log("channels started")
    //gets all channels then send it back to client
    app.get('/api/channels', ( req , res ) => {
        const assert = require('assert')

        const collection = db.collection("channels");
        collection.find({}).toArray(function(err, channels) {
            assert.equal(err, null);
            console.log("Found the following channels: "+channels);
            res.send({channels})
        });
    });
    //adds a channel
    app.post('/api/channels', (req,res) =>{
        console.log(req.body.channelobj)
        const collection = db.collection("channels");
        // Insert some documents
        collection.insertOne(
            {channel_name : req.body.channelobj.channel_name,group_id:req.body.channelobj.group_id, users:req.body.channelobj.users,messages:[]}
            )
        res.send({"message":'added group'})
    })
    // adds a user to the channel
    app.put('/api/channels', (req,res)=>{
        console.log(req.body)
        const assert = require('assert')

        const collection = db.collection("channels");
        collection.updateOne({"_id": ObjectId(req.body.channelid)}, 
        { $addToSet: { users: req.body.channeluser } }, function(err, result) {
            
            assert.equal(err, null);
            res.send({"message":result})
        });
    })
    //gets the request from the client then gets that name and searchs the channels array for it then deletes that channel
    app.delete('/api/channels/:id', (req,res) =>{
        console.log(req.params)
        const assert = require('assert')
        const collection = db.collection("channels");
        
        collection.deleteOne({"_id": ObjectId(req.params.id)}, function(err, result) {
            assert.equal(err, null);
            res.send({"message":result})
        });
    })
    //deletes users from the channel
    app.delete('/api/channels/:channel/:name', (req,res) =>{
        console.log(req.params)
        const assert = require('assert')

        const collection = db.collection("channels");
        collection.updateOne({"_id": ObjectId(req.params.channel)}, 
        { $pull: { users: req.params.name } }, function(err, result) {
            
            assert.equal(err, null);
            res.send({"message":result})
        });
    })
}