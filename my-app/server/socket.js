module.exports = function(app,io){
    console.log("sockets started");
    //respond to connection
    io.on('connection',(socket) =>{
        console.log('user connected');
        io.emit("user has joined the channel")
        //respond to disconnection
        socket.on('disconnect',function(){
            io.emit("user has left the channel")
            console.log('user disconnection');
        });
        //respond to getting a message
        socket.on('add-message',(message) =>{
            //broacast messaeg to all users connected on this socket.
            console.log(message)
            io.emit('message',{type: 'message',text:message});

        });
    });
}