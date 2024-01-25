import mongoose, { Schema } from "mongoose";

const bugSchema = new mongoose.Schema({
    bug_id : Number,
name : String,
description : String,
author : {
    type: Schema.ObjectId,
    ref : 'User'
},
dateCreated : {
    type : Date,
    default : new Date.now()
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