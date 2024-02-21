import mongoose from "mongoose"
import Bug from './../models/Bug.js'
import Project from "../models/Project.js"

export const getAllBugs = async (req,res) => {
    //console.log("Showing All Projects")
    try{
        const bugs = await Bug.find().select({  bug_id:1,name:1,description:1,dateCreated:1,status:1})
        return res.status(200).send(bugs)
    }
    catch(error){
        return res.status(401).send({"error":"someting went wrong"})
    }
}
export const getBugDetails = async (req,res) => {
    //console.log(`getting details of bug with id ${req.params.id} `)
    try{
        const bug = await Bug.findOne({_id:req.params.id}).populate("author").populate("project").populate("assignee").select("-comms");
        if(!bug){
            return res.status(404).send({"msg":"details not found"})
        }
        // console.log(bug)
        return res.status(200).send(bug)
    }
    catch(error){
        return res.status(401).send({"error":"someting went wrong"})
    }
}

export const addNewBug = async (req,res) => {
    const newBug = new Bug(req.body)
    console.log(req.body)
    try{
        const bug = await newBug.save()
        return res.status(200).send(bug)
    }
    catch(error){
        return res.status(401).send({"msg":"Something went wrong"})
    }
}

export const updateBug = async (req,res) => {
    const id = req.params.id;
    const updatedDetails = req.body
    console.log("ID",id)


    const foundBug = Bug.findById(id)
    if(!foundBug) return res.status(400).json({error:'Bad request'})

    // const newProjectId = await Project.findOne({name : updatedDetails.project}).select("_id")

    const updatedBug = await Bug.findByIdAndUpdate(id, {...updatedDetails, author:updatedDetails.author._id,project:updatedDetails.project._id,assignee:updatedDetails.assignee._id})

    if(updatedBug){
        return res.status(200).json(updateBug)
    }

    // console.log(req.body)
    return res.status(400).json({error:'Bad request'})
}

export const deleteBug = (req,res) => {
    console.log(req.params.id)
    //return res.status(200).send({"msg":"deleting a bug"})
}



