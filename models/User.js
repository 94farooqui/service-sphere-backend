import mongoose, { Schema } from "mongoose";

export const userSchema = new mongoose.Schema({
    firstname : {
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
    mobile : {
        type: String
    },
    roles: {
        type : [String],
        default: ['user']
    },
    domain:{
        type: String
    }
    // bug : { type : Schema.Types.ObjectId, ref : 'Bug'},
    // comments : { type : Schema.Types.ObjectId, ref : 'Comment'}
})

const User = mongoose.model('User',userSchema);

export default User;