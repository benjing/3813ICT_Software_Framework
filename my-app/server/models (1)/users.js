import mongoose from 'mongoose';
var schema = mongoose.Schema;

var ChatUsers = new Schema({
    createdAt:{
        type: Date,
        defualt: Date.now
    },
    user_name: String
});

export default mongoose.model('users', ChatUsers);