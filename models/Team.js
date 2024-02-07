import mongoose, { Schema } from "mongoose";
import {userSchema} from './User.js'
export const teamSchema = new mongoose.Schema({
    domain: {
        type: String,
        required: true,
    },
    description: String,
    members : [{
        type: Schema.Types.ObjectId,
        ref : 'User'
    }]
})

const Team = mongoose.model("Team", teamSchema)

export default Team;