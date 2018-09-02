module.exports = function(app,db,fs){
    console.log("users started")
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

    //delete request from website to delete a user
    app.delete('/api/users/:name', (req,res) =>{
        fs.readFile('./data/users.json', 'utf8', function(err,data){
            if(err) {
                console.log(err);
            }
            userObj = JSON.parse(data);
            for (let i=0;i<userObj.length;i++){
                if (userObj[i].name == req.params.name){
                    userObj.splice(i,1)
                    var newdata = JSON.stringify(userObj);
                    fs.writeFile('./data/users.json',newdata,'utf-8',function(err){
                        if (err) throw err;
                        //Send response that deleting user was successfull.
                        res.send({'users':userObj[i],'success':true});
                    });
                    //delete users from channels
                    fs.readFile('./data/channels.json', 'utf8', function(err,data){
                        if(err) {
                            console.log(err);
                        }
                        channelObj = JSON.parse(data);
                        for (let i=0;i<channelObj.length;i++){
                            for (let j=0;j<channelObj[i].users.length;j++){
                                if (channelObj[i].users[j] == req.params.name){
                                    channelObj[i].users.splice(j,1)
                                    var newdata = JSON.stringify(channelObj);
                                    fs.writeFile('./data/channels.json',newdata,'utf-8',function(err){
                                        if (err) throw err;
                                    });
                                    return;
                                }
                            }
                        }
                    })
                    fs.readFile('./data/groups.json', 'utf8', function(err,data){
                        if(err) {
                            console.log(err);
                        }
                        groupObj = JSON.parse(data);
                        for (let i=0;i<groupObj.length;i++){
                            for (let j=0;j<groupObj[i].users.length;j++){
                                if (groupObj[i].users[j] == req.params.name){
                                    groupObj[i].users.splice(j,1)
                                    var newdata = JSON.stringify(groupObj);
                                    fs.writeFile('./data/groups.json',newdata,'utf-8',function(err){
                                        if (err) throw err;
                                    });
                                    return;
                                }
                            }
                        }
                    })
                    return;
                }
            }
            res.send({'users':'','success':false});
        })
    })
    //this edits the data of the user
    app.put('/api/users', (req,res)=>{
        fs.readFile('./data/users.json', 'utf8', function(err,data){
            if(err) {
                console.log(err);
            }
            userObj = JSON.parse(data);
            for (let i=0;i<userObj.length;i++){
                if (userObj[i].name == req.body.userObj.name){
                    userObj[i] = req.body.userObj
                    var newdata = JSON.stringify(userObj);
                    fs.writeFile('./data/users.json',newdata,'utf-8',function(err){
                        if (err) throw err;
                            //Send response that update was successfull.
                        res.send({'users':userObj[i],'success':true});
                    });
                    return;
                }
            }
            res.send({'users':userObj[i],'success':false});
        })
    })
}