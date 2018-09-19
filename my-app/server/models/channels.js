import mongoose from 'mongoose';
var schema = mongoose.Schema;

var chatChannel = new Schema({
    createdAt:{
        type: Date,
        defualt: Date.now
    },
    channel_name: String,
    group_id:String,
    Users:[],
    messages: [{name:String,message:String}],
});

export default mongoose.model('channels', chatChannel);