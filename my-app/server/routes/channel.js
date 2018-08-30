module.exports = function(app,db,fs){
    console.log("channels started")
    app.get('/api/channels', ( req , res ) => {
        fs.readFile('./data/channels.json', 'utf8', function(err,data){
            if(err) {
                console.log(err);
                res.send({'channels':'','success':false});
            }
            channelObj = JSON.parse(data);
            res.send({'channels':channelObj,'success':true});
        })
    });

    app.post('/api/channels', (req,res) =>{
        console.log(req.body.channelObj)
        fs.readFile('./data/channels.json', 'utf8', function(err,data){
            if(err) {
                console.log(err);
            }
            channelObj = JSON.parse(data);
            var channelexist = 0
            for (let i=0;i<channelObj.length;i++){
                if (channelObj[i].channel_name == req.body.channelobj.channel_name){
                    channelexist = 1
                }
            }
            //if the user exists
            if (channelexist == 1){
                //send that add user failed
                res.send({'users':req.body.channelobj.channel_name,'success':false});
            }
            //if user does not exist
            else{
                channelObj.push(req.body.channelobj)
                console.log(channelObj)
                var newdata = JSON.stringify(channelObj);
                //writes all the old data with the new data added into the file.
                fs.writeFile('./data/channels.json',newdata,'utf-8',function(err){
                    if (err) throw err;
                    //send add user succeded
                    res.send({'users':req.body.channelobj.channel_name,'success':true});
                });
            }
        })
    })
    
    app.put('/api/channels', (req,res)=>{
        console.log(req.body)
        fs.readFile('./data/channels.json', 'utf8', function(err,data){
            if(err) {
                console.log(err);
            }
            channelObj = JSON.parse(data);
            for (let i=0;i<channelObj.length;i++){
                if (channelObj[i].channel_name == req.body.channelname){
                    console.log(channelObj[i].group_name)
                    if(channelObj[i].users.includes(req.body.channeluser)){
                        res.send({'message':"already exist",'success':false})
                        return
                    }else{
                        channelObj[i].users.push(req.body.channeluser)
                        var newdata = JSON.stringify(channelObj);
                        fs.writeFile('./data/channels.json',newdata,'utf-8',function(err){
                            if (err) throw err;
                                //Send response that registration was successfull.
                            res.send({'groups':channelObj[i],'success':true});
                        });
                        return;
                    }
                }
            }
            res.send({'groups':channelObj[i],'success':false});
        })
    })
}