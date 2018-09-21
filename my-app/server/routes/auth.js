module.exports = function(app,db,fs){
    console.log("login working")
    //this checks if the user exists then sends true to the client
    app.post('/api/auth', ( req , res ) => {
        var user = req.body.username
        var pass = req.body.password
        const assert = require('assert')

        const collection = db.collection("tests");
        collection.find({name:user,password:pass}).toArray(function(err, users) {
            assert.equal(err, null);
            console.log("Found the following users: "+ users );
            if (users == ""||users == null){
                res.send({"users":"","success":false})
            }else{
                res.send({"users":users,"success":true})
            }
        });
    });
    // app.post('/api/auth', ( req , res ) => {
    //     var user = req.body.username;
    //     var pass = req.body.password
    //     fs.readFile('./data/users.json', 'utf8', function(err,data){
    //         if(err) {
    //             console.log(err);
    //             res.send({'username':'','success':false});
    //         }
    //         userObj = JSON.parse(data);
    //         for (let i=0;i<userObj.length;i++){
    //             if (userObj[i].name == user|| userObj[i].password == pass){
    //                 res.send({'username':userObj[i],'success':true});
    //                 return;
    //             }
    //         }
    //         res.send({'username':user,'success':false});
    //     })

    // })

}