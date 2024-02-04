import mongoose, { Schema } from "mongoose";
import {userSchema} from './User.js'
export const teamSchema = new mongoose.Schema({
    name: String,
    description: String,
    domain: {
        type: String,
        enum: ['Frontend', 'Backend', 'DevOps'],
        required: true,
      },
    members : [{
        type: Schema.Types.ObjectId,
        ref : 'User'
    }]
})

const Team = mongoose.model("Team", teamSchema)

export default Team;