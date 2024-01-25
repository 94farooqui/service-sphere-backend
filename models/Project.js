import mongoose from "mongoose";

const projectSchema = new mongoose.Schema({
    name : {
        type: String,
        required: true
    },
    description : {
        type: String,
        default : "This is a project"
    }
})

const Project = mongoose.model('Project', projectSchema)

export default Project;