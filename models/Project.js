import mongoose, { Schema, Types } from "mongoose";
import { teamSchema } from "./Team.js";

const projectSchema = new mongoose.Schema({
    name : {
        type: String,
        required: true
    },
    description : {
        type: String,
        default : "This is a project"
    },
    bugs : {
        type : Schema.Types.ObjectId,
        ref: "Bug"
    },
    teams: [teamSchema]
})

const Project = mongoose.model('Project', projectSchema)

export default Project;