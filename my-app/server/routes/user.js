var ObjectId = require('mongodb').ObjectID;
module.exports = function(app,db,fs){
    console.log("users started")
    
    //the get request from the website
    app.get('/api/users', ( req , res ) => {
        const assert = require('assert')

        const collection = db.collection("tests");
        //gets all users in the database
        collection.find({}).toArray(function(err, users) {
            assert.equal(err, null);
            console.log("Found the following users: "+users);
            //sends all the users data back
            res.send({users})
        });
    });
    //the post request from the website
    app.post('/api/users', (req,res) => {

        console.log(req.body.userOBJ)
        const collection = db.collection("tests");
        const assert = require('assert')
        // sees if there is a user with the given name
        collection.find({name:req.body.userOBJ.name}).toArray(function(err, users) {
            assert.equal(err, null);
            console.log("Found the following records: "+ users);
            if (users == ""||users == null){
                console.log("hello")
                // inserts the user info
                collection.insertOne(
                    {name : req.body.userOBJ.name, password:req.body.userOBJ.password,image:req.body.userOBJ.image, email:req.body.userOBJ.email, roles:[req.body.userOBJ.roles]}
                    , function(err,users){
                        //sends back user id and success
                        res.send({"users":users.ops[0]._id,"success":true})
                    })
            }else{
                //sends success false if a user was found
                res.send({"users":"","success":false})
            }
        });
    });

    //delete request from website to delete a user
    app.delete('/api/users/:id', (req,res) =>{

        const assert = require('assert')
        const collection = db.collection("tests");
        //deletes the user with the given id
        collection.deleteOne({"_id": ObjectId(req.params.id) }, function(err, result) {
            assert.equal(err, null);
            //sends success
            res.send({"message":result,"success":true})
        });

    })
    //this edits the data of the user
    app.put('/api/users', (req,res)=>{
        console.log(req.body)
        const assert = require('assert')

        const collection = db.collection("tests");
        //changes the data of the user with the given id
        collection.updateOne({"_id": ObjectId(req.body.userObj.id) }, 
            { $set: {name : req.body.userObj.name, password:req.body.userObj.password,image:req.body.userObj.image, email:req.body.userObj.email, roles:req.body.userObj.roles} }, function(err, result) {
            assert.equal(err, null);
            //sends success
            res.send({"message":result,"success":true})
        });
    })
}