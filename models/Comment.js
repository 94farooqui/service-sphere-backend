import mongoose, { Schema } from "mongoose";

const commentSchema = new mongoose.Schema({
    user : {
        type: Schema.ObjectId,
        ref: 'User'
    },
    message : String
})

const Comment = mongoose.Model('Comment', commentSchema)

export default Comment