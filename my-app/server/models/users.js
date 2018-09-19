import mongoose from 'mongoose';
var Schema = mongoose.Schema;

var chatUsers = new Schema({
    createdAt:{
        type: Date,
        defualt: Date.now
    },
    name: String,
    email:String,
    password:String,
    roles:[]
});

export default mongoose.model('users', chatUsers);