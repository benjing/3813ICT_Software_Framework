module.exports = function(app,db,fs){
    console.log("channels started")
    app.post('/api/channels', (req,res) =>{
        fs.readFile('./data/channels.json', 'utf8', function(err,data){
            if(err) {
                console.log(err);
                res.send({'channels':'','success':false});
            }
            channelObj = JSON.parse(data);
            for (let i=0;i<channelObj.length;i++){
                if (channelObj[i].channel_id == req){
                    console.log(channelObj[i].group_name)
                    groupObj.splice(i,1)
                    var newdata = JSON.stringify(channelObj);
                    fs.writeFile('./data/channels.json',newdata,'utf-8',function(err){
                        if (err) throw err;
                            //Send response that registration was successfull.
                            res.send({'channels':channelObj[i],'success':true});
                    });
                    return;
                }
            res.send({'groups':'','success':false});
            }
        })
    })
}