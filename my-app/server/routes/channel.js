module.exports = function(app,db,fs){
    console.log("channels started")
    //gets all channels then send it back to client
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
    //adds a channel
    app.post('/api/channels', (req,res) =>{
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
            //if the channel exists
            if (channelexist == 1){
                //send that add channel failed
                res.send({'users':req.body.channelobj.channel_name,'success':false});
            }
            //if channel does not exist
            else{
                channelObj.push(req.body.channelobj)
                var newdata = JSON.stringify(channelObj);
                //writes all the old data with the new data added into the file.
                fs.writeFile('./data/channels.json',newdata,'utf-8',function(err){
                    if (err) throw err;
                    //send add channel succeded
                    res.send({'users':req.body.channelobj.channel_name,'success':true});
                });
            }
        })
    })
    // adds a user to the channel
    app.put('/api/channels', (req,res)=>{
        fs.readFile('./data/channels.json', 'utf8', function(err,data){
            if(err) {
                console.log(err);
            }
            channelObj = JSON.parse(data);
            for (let i=0;i<channelObj.length;i++){
                if (channelObj[i].channel_name == req.body.channelname){
                    if(channelObj[i].users.includes(req.body.channeluser)){
                        res.send({'message':"already exist",'success':false})
                        return
                    }else{
                        channelObj[i].users.push(req.body.channeluser)
                        var newdata = JSON.stringify(channelObj);
                        fs.writeFile('./data/channels.json',newdata,'utf-8',function(err){
                            if (err) throw err;
                                //Send response that user was added successfully.
                            res.send({'groups':channelObj[i],'success':true});
                        });
                        return;
                    }
                }
            }
            res.send({'groups':channelObj[i],'success':false});
        })
    })
    //gets the request from the client then gets that name and searchs the channels array for it then deletes that channel
    app.delete('/api/channels/:name', (req,res) =>{
        fs.readFile('./data/channels.json', 'utf8', function(err,data){
            if(err) {
                console.log(err);
            }
            channelObj = JSON.parse(data);
            for (let i=0;i<channelObj.length;i++){
                if (channelObj[i].channel_name == req.params.name){
                    channelObj.splice(i,1)
                    var newdata = JSON.stringify(channelObj);
                    fs.writeFile('./data/channels.json',newdata,'utf-8',function(err){
                        if (err) throw err;
                            //Send response that deletion of channel was successfull.
                        res.send({'channels':channelObj[i],'success':true});
                    });
                    return;
                }
            }
            res.send({'channels':'','success':false});
        })
    })
    //deletes users from the channel
    app.delete('/api/channels/:channel/:name', (req,res) =>{
        fs.readFile('./data/channels.json', 'utf8', function(err,data){
            if(err) {
                console.log(err);
            }
            channelObj = JSON.parse(data);
            for (let i=0;i<channelObj.length;i++){
                if (channelObj[i].channel_name == req.params.channel){
                    for (let j=0;j<channelObj[i].users.length;j++){
                        if (channelObj[i].users[j] == req.params.name){
                            channelObj[i].users.splice(j,1)
                            var newdata = JSON.stringify(channelObj);
                            fs.writeFile('./data/channels.json',newdata,'utf-8',function(err){
                                if (err) throw err;
                                //Send response that deletion of user was successfull.
                                res.send({'channels':channelObj[i],'success':true});
                            });
                            return;
                        }
                    }
                }
            }
        })
    })
}