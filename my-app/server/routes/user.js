var ObjectId = require('mongodb').ObjectID;
module.exports = function(app,db,fs){
    console.log("users started")
    
    //the get request from the website
    app.get('/api/users', ( req , res ) => {
        const assert = require('assert')

        const collection = db.collection("tests");
        collection.find({}).toArray(function(err, users) {
            assert.equal(err, null);
            console.log("Found the following records: "+users);
            res.send({users})
        });
    });
    //the post request from the website
    app.post('/api/users', (req,res) => {

        console.log(req.body.userOBJ)
        const collection = db.collection("tests");
        const assert = require('assert')
        // Insert some documents
        collection.find({name:req.body.userOBJ.name}).toArray(function(err, users) {
            assert.equal(err, null);
            console.log("Found the following records: "+ users);
            if (users == ""||users == null){
                console.log("hello")
                collection.insertOne(
                    {name : req.body.userOBJ.name, password:req.body.userOBJ.password, email:req.body.userOBJ.email, roles:[req.body.userOBJ.roles]}
                    )
                res.send({"success":true})
            }else{
                console.log("nohello")
                res.send({"success":false})
            }
        });
    });

    //delete request from website to delete a user
    app.delete('/api/users/:id', (req,res) =>{

        const assert = require('assert')
        const collection = db.collection("tests");
        
        collection.deleteOne({"_id": ObjectId(req.params.id) }, function(err, result) {
            assert.equal(err, null);
            res.send({"message":result})
        });

    })
    //this edits the data of the user
    app.put('/api/users', (req,res)=>{
        console.log(req.body)
        const assert = require('assert')

        const collection = db.collection("tests");
        collection.updateOne({"_id": ObjectId(req.body.userObj.id) }, 
            { $set: {name : req.body.userObj.name, password:req.body.userObj.password, email:req.body.userObj.email, roles:req.body.userObj.roles} }, function(err, result) {
            assert.equal(err, null);
            res.send({"message":result})
        });
    })
}