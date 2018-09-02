module.exports = function(app,db, fs){
    console.log("groups started")

    //this sends all the groups to the client
    app.get('/api/groups', ( req , res ) => {
        fs.readFile('./data/groups.json', 'utf8', function(err,data){
            if(err) {
                console.log(err);
                res.send({'groups':'','success':false});
            }
            groupObj = JSON.parse(data);
            res.send({'groups':groupObj,'success':true});
        })
    });

    app.post('/api/groups',(req,res) => {
        //get the data from the file
        fs.readFile('./data/groups.json', 'utf8', function(err,data){
            //if error getting data e.g could not find file.
            if(err) {
                console.log(err);
            }
            groupObj = JSON.parse(data);
            var groupexist = 0
            //checks if the group already exists
            for (var i = 0; i < groupObj.length; i++){
                if (groupObj[i].group_name == req.body.groupObj.group_name){
                  groupexist = 1
                }
              }
            //if the group exists
            if (groupexist == 1){
                //send that add group failed
                res.send({'users':req.body.groupObj.group_name,'success':false});
            }
            //if group does not exist
            else{
                groupObj.push(req.body.groupObj)
                var newdata = JSON.stringify(groupObj);
                //writes all the old data with the new data added into the file.
                fs.writeFile('./data/groups.json',newdata,'utf-8',function(err){
                    if (err) throw err;
                    //send add group succeded
                    res.send({'users':req.body.groupObj.group_name,'success':true});
                });
            }
        })
    })
    //this deletes the group then deletes all channels of that group
    app.delete('/api/groups/:name', (req,res) =>{
        fs.readFile('./data/groups.json', 'utf8', function(err,data){
            if(err) {
                console.log(err);
            }
            groupObj = JSON.parse(data);
            for (let i=0;i<groupObj.length;i++){
                if (groupObj[i].group_name == req.params.name){
                    var groupname = groupObj[i].group_name
                    groupObj.splice(i,1)
                    var newdata = JSON.stringify(groupObj);
                    fs.writeFile('./data/groups.json',newdata,'utf-8',function(err){
                        if (err) throw err;
                            //Send response that deletion was successfull.
                        res.send({'groups':groupObj[i],'success':true});
                    });
                    fs.readFile('./data/channels.json', 'utf8', function(err,data){
                        if(err) {
                            console.log(err);
                        }
                        channelObj = JSON.parse(data);
                        for (let i=0;i<channelObj.length;i++){
                            if (channelObj[i].group_id == groupname){
                                channelObj.splice(i,1)
                            }
                        }
                        var newdata = JSON.stringify(channelObj);
                        fs.writeFile('./data/channels.json',newdata,'utf-8',function(err){
                            if (err) throw err;
                        });
                    })
                    return;
                }
            }
        })
    })
    // adds users to a group
    app.put('/api/groups', (req,res)=>{
        fs.readFile('./data/groups.json', 'utf8', function(err,data){
            if(err) {
                console.log(err);
            }
            groupObj = JSON.parse(data);
            for (let i=0;i<groupObj.length;i++){
                if (groupObj[i].group_name == req.body.groupname){
                    if(groupObj[i].users.includes(req.body.groupuser)){
                        res.send({'message':"already exist",'success':false})
                        return
                    }else{
                        groupObj[i].users.push(req.body.groupuser)
                        var newdata = JSON.stringify(groupObj);
                        fs.writeFile('./data/groups.json',newdata,'utf-8',function(err){
                            if (err) throw err;
                                //Send response that user was added successfully.
                            res.send({'groups':groupObj[i],'success':true});
                        });
                        return;
                    }
                }
            }
            res.send({'groups':groupObj[i],'success':false});
        })
    })

    //delete request that deletes users from a group and then the channels of that group.
    app.delete('/api/groups/:group/:name', (req,res) =>{
        fs.readFile('./data/groups.json', 'utf8', function(err,data){
            if(err) {
                console.log(err);
            }
            groupObj = JSON.parse(data);
            for (let i=0;i<groupObj.length;i++){
                if (groupObj[i].group_name == req.params.group){
                    for (let j=0;j<groupObj[i].users.length;j++){
                        if (groupObj[i].users[j] == req.params.name){
                            groupObj[i].users.splice(j,1)
                            var newdata = JSON.stringify(groupObj);
                            fs.writeFile('./data/groups.json',newdata,'utf-8',function(err){
                                if (err) throw err;
                                //Send response that deletion of user from group was successfull.
                                res.send({'channels':groupObj[i],'success':true});
                            });
                            fs.readFile('./data/channels.json', 'utf8', function(err,data){
                                if(err) {
                                    console.log(err);
                                }
                                channelObj = JSON.parse(data);
                                for (let i=0;i<channelObj.length;i++){
                                    if (channelObj[i].group_id == req.params.group){
                                        for (let j=0;j<channelObj[i].users.length;j++){
                                            if (channelObj[i].users[j] == req.params.name){
                                                console.log(channelObj[i].channel_name)
                                                channelObj[i].users.splice(j,1)
                                                var newdata = JSON.stringify(channelObj);
                                                fs.writeFile('./data/channels.json',newdata,'utf-8',function(err){
                                                    if (err) throw err;
                                                });
                                                return;
                                            }
                                        }
                                    }
                                }
                            })
                            return;
                        }
                    }
                }
            }
        })
    })
}