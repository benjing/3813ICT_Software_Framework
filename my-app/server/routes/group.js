var ObjectId = require('mongodb').ObjectID;
module.exports = function(app,db, fs){
    console.log("groups started")

    //this sends all the groups to the client
    app.get('/api/groups', ( req , res ) => {
        const assert = require('assert')

        const collection = db.collection("groups");
        collection.find({}).toArray(function(err, groups) {
            assert.equal(err, null);
            res.send({groups})
        });
    });

    app.post('/api/groups',(req,res) => {
        console.log(req.body.groupObj)
        const collection = db.collection("groups");
        // Insert some documents
        collection.insertOne(
            {group_name : req.body.groupObj.group_name, users:req.body.groupObj.users}
            )
        res.send({"message":'added group'})
    })
    //this deletes the group then deletes all channels of that group
    app.delete('/api/groups/:id', (req,res) =>{
        console.log(req.params.id)
        const assert = require('assert')
        const collection = db.collection("groups");
        
        collection.deleteOne({"_id": ObjectId(req.params.id) }, function(err, result) {
            assert.equal(err, null);
            const collection = db.collection("channels");
        
            collection.deleteMany({"group_id": req.params.id }, function(err, result) {
                assert.equal(err, null);
                res.send({"message":result})
            });
        });
        
    })
    // adds users to a group
    app.put('/api/groups', (req,res)=>{
        console.log(req.body)
        const assert = require('assert')

        const collection = db.collection("groups");
        collection.updateOne({"_id": ObjectId(req.body.groupid)}, 
        { $addToSet: { users: req.body.groupuser } }, function(err, result) {
            
            assert.equal(err, null);
            res.send({"message":result})
        });
    })

    //delete request that deletes users from a group and then the channels of that group.
    app.delete('/api/groups/:group/:name', (req,res) =>{
        console.log(req.params)

        const collection = db.collection("groups");
        collection.updateOne({"_id": ObjectId(req.params.group)}, 
        { $pull: { users: req.params.name } }, function(err, result) {
            const collection = db.collection("channels");
            collection.updateMany({"group_id": req.params.group}, 
            { $pull: { users: req.params.name } }, function(err, result) {
                res.send({"message":result})
            });
        });
    })
}