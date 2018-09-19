import mongoose from 'mongoose';
var schema = mongoose.Schema;

var chatGroup = new Schema({
    createdAt:{
        type: Date,
        defualt: Date.now
    },
    group_name: String,
    users:[]
});

export default mongoose.model('channels', chatGroup);