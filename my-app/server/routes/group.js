module.exports = function(app,db, fs){
    console.log("groups started")
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
        console.log(req.body.groupObj)
        //get the data from the file
        fs.readFile('./data/groups.json', 'utf8', function(err,data){
            //if error getting data e.g could not find file.
            if(err) {
                console.log(err);
            }
            groupObj = JSON.parse(data);
            var groupexist = 0
            //checks if the user already exists
            for (var i = 0; i < groupObj.length; i++){
                if (groupObj[i].group_name == req.body.groupObj.group_name){
                  groupexist = 1
                }
              }
            //if the user exists
            if (groupexist == 1){
                //send that add user failed
                res.send({'users':req.body.groupObj.group_name,'success':false});
            }
            //if user does not exist
            else{
                groupObj.push(req.body.groupObj)
                var newdata = JSON.stringify(groupObj);
                //writes all the old data with the new data added into the file.
                fs.writeFile('./data/groups.json',newdata,'utf-8',function(err){
                    if (err) throw err;
                    //send add user succeded
                    res.send({'users':req.body.groupObj.group_name,'success':true});
                });
            }
        })
    })
    
    app.delete('/api/groups/:name', (req,res) =>{
        console.log(req.params.name)
        fs.readFile('./data/groups.json', 'utf8', function(err,data){
            if(err) {
                console.log(err);
            }
            groupObj = JSON.parse(data);
            for (let i=0;i<groupObj.length;i++){
                if (groupObj[i].group_name == req.params.name){
                    console.log(groupObj[i].group_name)
                    var groupname = groupObj[i].group_name
                    groupObj.splice(i,1)
                    var newdata = JSON.stringify(groupObj);
                    fs.writeFile('./data/groups.json',newdata,'utf-8',function(err){
                        if (err) throw err;
                            //Send response that registration was successfull.
                        res.send({'groups':groupObj[i],'success':true});
                    });
                    fs.readFile('./data/channels.json', 'utf8', function(err,data){
                        if(err) {
                            console.log(err);
                        }
                        channelObj = JSON.parse(data);
                        for (let i=0;i<channelObj.length;i++){
                            if (channelObj[i].group_id == groupname){
                                console.log(channelObj[i].channel_name)
                                channelObj.splice(i,1)
                            }
                        }
                        var newdata = JSON.stringify(channelObj);
                        fs.writeFile('./data/channels.json',newdata,'utf-8',function(err){
                            if (err) throw err;
                            //Send response that registration was successfull.
                            //res.send({'channels':channelObj[i],'success':true});
                        });
                    })
                    return;
                }
            //res.send({'groups':'','success':false});
            }
        })
    })
    app.put('/api/groups', (req,res)=>{
        console.log(req.body)
        fs.readFile('./data/groups.json', 'utf8', function(err,data){
            if(err) {
                console.log(err);
            }
            groupObj = JSON.parse(data);
            for (let i=0;i<groupObj.length;i++){
                if (groupObj[i].group_name == req.body.groupname){
                    console.log(groupObj[i].group_name)
                    if(groupObj[i].users.includes(req.body.groupuser)){
                        res.send({'message':"already exist",'success':false})
                        return
                    }else{
                        groupObj[i].users.push(req.body.groupuser)
                        var newdata = JSON.stringify(groupObj);
                        fs.writeFile('./data/groups.json',newdata,'utf-8',function(err){
                            if (err) throw err;
                                //Send response that registration was successfull.
                            res.send({'groups':groupObj[i],'success':true});
                        });
                        return;
                    }
                }
            }
            res.send({'groups':groupObj[i],'success':false});
        })
    })
}