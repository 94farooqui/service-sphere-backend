import mongoose, { Schema } from "mongoose";

const userSchema = new mongoose.Schema({
    firtname : {
        type : String,
        required : true
    },
    lastname : {
        type : String,
        required : true
    },
    email: {
        type: String,
        required:true
    },
    password : {
        type: String
    },
    bug : { type : Schema.Types.ObjectId, ref : 'Bug'},
    comments : { type : Schema.Types.ObjectId, ref : 'Comment'}
})

const User = mongoose.model('User',userSchema);

export default User;