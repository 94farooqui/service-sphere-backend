import mongoose, { Schema } from "mongoose";

export const commentSchema = new mongoose.Schema({
    user : {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    message : String,
})

const Comment = mongoose.model('Comment', commentSchema)

export default Comment