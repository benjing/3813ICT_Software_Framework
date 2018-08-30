module.exports = function(app,db,fs){
    console.log("login working")
    //the get request from the website
    app.get('/api/users', ( req , res ) => {
        //get the data from the file
        fs.readFile('./data/users.json', 'utf8', function(err,data){
            //if error getiing data e.g could not find file.
            if(err) {
                console.log(err);
                // send that getting the users failed
                res.send({'users':'','success':false});
            }
            userObj = JSON.parse(data);
            //sends getting user was a sucess with all users.
            res.send({'users':userObj,'success':true});
        })
    });
    //the post request from the website
    app.post('/api/users', (req,res) => {
        console.log(req.body.userOBJ)
        //get the data from the file
        fs.readFile('./data/users.json', 'utf8', function(err,data){
            //if error getting data e.g could not find file.
            if(err) {
                console.log(err);
            }
            userObj = JSON.parse(data);
            var userexist = 0
            //checks if the user already exists
            for (var i = 0; i < userObj.length; i++){
                if (userObj[i].name == req.body.userOBJ.name){
                  userexist = 1
                }
              }
            //if the user exists
            if (userexist == 1){
                //send that add user failed
                res.send({'users':req.body.userOBJ.name,'success':false});
            }
            //if user does not exist
            else{
                userObj.push(req.body.userOBJ)
                var newdata = JSON.stringify(userObj);
                //writes all the old data with the new data added into the file.
                fs.writeFile('./data/users.json',newdata,'utf-8',function(err){
                    if (err) throw err;
                    //send add user succeded
                    res.send({'users':req.body.userOBJ.name,'success':true});
                });
            }
        })
    });
}