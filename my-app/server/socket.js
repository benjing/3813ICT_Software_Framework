module.exports = function(app,io){
    console.log("sockets started");
    //respond to connection
    io.on('connection',(socket) =>{
        console.log('user connected');
        var channelinfo = JSON.parse(socket.handshake.query.channel)
        // var user = JSON.parse(socket.handshake.query)
        console.log(channelinfo)
        var channel = channelinfo.channel
        var user = channelinfo.user
        socket.join(channel);
        io.to(channel).emit('message',{type: 'message',text:{name:"Server",message:"User "+user+" has joined the channel",image:false}})
        //respond to disconnection
        socket.on('disconnect',function(){
            io.to(channel).emit('message',{type: 'message',text:{name:"Server",message:"User "+user+" has left the channel",image:false}})
            socket.leave(channel)
            console.log('user disconnected');
        });
        //respond to getting a message
        socket.on('add-message',(message) =>{
            //broacast messaeg to all users connected on this socket.
            io.to(channel).emit('message',{type: 'message',text:message});
            console.log("message sent")

        });
    });
}