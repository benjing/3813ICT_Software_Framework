module.exports = function(app,db,fs){
    console.log("login working")
    //this checks if the user exists then sends true to the client
    app.post('/api/auth', ( req , res ) => {
        var user = req.body.username
        var pass = req.body.password
        const assert = require('assert')

        const collection = db.collection("tests");
        //see if a user with a matching passord is in the db
        collection.find({name:user,password:pass}).toArray(function(err, users) {
            assert.equal(err, null);
            console.log("Found the following users: "+ users );
            //if no user found send false
            if (users == ""||users == null){
                res.send({"users":"","success":false})
            //if found user send true
            }else{
                res.send({"users":users,"success":true})
            }
        });
    });
}