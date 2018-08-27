module.exports = function(app,db, fs){
    console.log("groups started")
    app.get('/api/groups', ( req , res ) => {
        fs.readFile('./data/groups.json', 'utf8', function(err,data){
            if(err) {
                console.log(err);
                res.send({'groups':'','success':false});
            }
            groupObj = JSON.parse(data);
            for (let i=0;i<groupObj.length;i++){
                console.log(groupObj[i].group_name)
                res.send({'groups':groupObj[i],'success':true});
                return;
            }
            res.send({'groups':'','success':false});
        })
    });
    
    app.post('/api/groups', (req,res) =>{
        fs.readFile('./data/groups.json', 'utf8', function(err,data){
            if(err) {
                console.log(err);
                res.send({'groups':'','success':false});
            }
            groupObj = JSON.parse(data);
            for (let i=0;i<groupObj.length;i++){
                if (groupObj[i].group_id == req){
                    console.log(groupObj[i].group_name)
                    var groupID = groupObj[i].group_id
                    groupObj.splice(i,1)
                    var newdata = JSON.stringify(userObj);
                    fs.writeFile('authdata.json',newdata,'utf-8',function(err){
                        if (err) throw err;
                            //Send response that registration was successfull.
                            res.send({'groups':groupObj[i],'success':true});
                    });
                    fs.readFile('./data/channels.json', 'utf8', function(err,data){
                        if(err) {
                            console.log(err);
                            res.send({'channels':'','success':false});
                        }
                        channelObj = JSON.parse(data);
                        for (let i=0;i<channelObj.length;i++){
                            if (channelObj[i].group_id == groupID){
                                console.log(channelObj[i].channel_name)
                                channelObj.splice(i,1)
                            }
                        }
                        var newdata = JSON.stringify(userObj);
                                fs.writeFile('./data/groups.json',newdata,'utf-8',function(err){
                                if (err) throw err;
                                    //Send response that registration was successfull.
                                    res.send({'groups':groupObj[i],'success':true});
                                });
                        res.send({'groups':'','success':false});
                    })
                    return;
                }
            res.send({'groups':'','success':false});
            }
        })
    })
}