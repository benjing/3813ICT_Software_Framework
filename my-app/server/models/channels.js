import mongoose from 'mongoose';
var schema = mongoose.Schema;

var chatChannel = new Schema({
    createdAt:{
        type: Date,
        defualt: Date.now
    },
    channel_id: String,
    channel_name: String,
    messages: [{name:String,message:String}],
    Users: [{name:String}]
});

export default mongoose.model('channels', chatChannel);