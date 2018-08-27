// import mongoose from "mongoose";
// import User_model from '../models/users';

module.exports = function(app,db,fs){
    console.log("login working")
    // console.log(db.collection("groups").find());
    // db.open(function(err,db){
    //     var collection = db.collection("test1");
    //     collection.insert({name:"ben"})
    // })
    // db.collections(function(err, collections){
    //     if(err){
    //         console.log(err);
    //     }
    //     console.log("no error")
    // });
    app.post('/api/auth', ( req , res ) => {
        console.log(req.body)
        var user = req.body.username;
        fs.readFile('./data/users.json', 'utf8', function(err,data){
            if(err) {
                console.log(err);
                res.send({'username':'','success':false});
            }
            userObj = JSON.parse(data);
            for (let i=0;i<userObj.length;i++){
                if (userObj[i].name == user){
                    console.log(userObj[i].name)
                    console.log(user)
                    res.send({'username':userObj,'success':true});
                    return;
                }
            }
            res.send({'username':user,'success':false});
        })
        // localStorage.getItem("username")
        // var new_user = new User_model({
        //     user_name: "ben"
        // })
        // console.log(new_user)
        // new_user.save((err,user) =>{
        //     if(err){
        //         return res.json({'sucess':false,'message':err})
        //     }
        //     return res.join({'sucess':true,'message':user})
        // })
        // tests = db.collections();
        // var new_user = new ChatUsers({
        //     user_name: "ben"
        // })
        // console.log(new_user)
        // new_user.save((err,tests) => {
        //     if(err){
        //         res.send({'success':true,'message': err})
        //     }
        // res.send({'success':true,'message':"hello"})
        // })

    })
}