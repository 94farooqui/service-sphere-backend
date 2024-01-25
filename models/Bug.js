import mongoose, { Schema } from "mongoose";
import Inc from 'mongoose-sequence'
const AutoIncrement = Inc(mongoose);

const bugSchema = new mongoose.Schema({
    bug_id : {type : Number, unique: true},
    name : String,
    description : String,
    author : {
        type: Schema.Types.ObjectId,
        ref : 'User'
    },
    dateCreated : {
        type : Date,
        default :  Date.now()
    },
    dateResolved : {
        type: Date,
    },
    project : {
        type: Schema.Types.ObjectId,
        ref : 'Project'
    },
    assignee: {
        type: Schema.Types.ObjectId,
        ref : 'User'
    },
    status : String,
    comms : [{type: Schema.Types.ObjectId, ref:'Comment'}]
    })

    bugSchema.plugin(AutoIncrement, { inc_field: 'bug_id' });


const Bug = mongoose.model('Bug',bugSchema)

export default Bug;