import mongoose from "mongoose"
import Bug from './../models/Bug.js'

export const getAllBugs = async (req,res) => {
    //console.log("Showing All Projects")
    try{
        const bugs = await Bug.find()
        return res.status(200).send(bugs)
    }
    catch(error){
        return res.status(401).send({"error":"someting went wrong"})
    }
}
export const getBugDetails = async (req,res) => {
    //console.log(`getting details of bug with id ${req.params.id} `)
    try{
        const bug = await Bug.findOne({_id:req.params.id}).populate("author").populate("project").populate("assignee");
        if(!bug){
            return res.status(404).send({"msg":"details not found"})
        }
        console.log(bug)
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

export const updateBug = (req,res) => {
    return res.status(200).send({"msg":"updating a bug"})
}

export const deleteBug = (req,res) => {
    console.log(req.params.id)
    //return res.status(200).send({"msg":"deleting a bug"})
}



