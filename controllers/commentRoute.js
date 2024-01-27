import mongoose from "mongoose"
import Comment from './../models/Comment.js'
import Bug from './../models/Bug.js'
import User from "../models/User.js"

export const getAllComments = async (req,res) => {
    console.log("Showing All Comments")
    try{
        const comments = await Comment.find()
        return res.status(200).send(pojects)
    }
    catch(error){
        return res.status(401).send({"error":"someting went wrong"})
    }
    
}

export const addNewComment = async (req,res) => {
    const newComment = new Comment(req.body)
    console.log(req.body)
    try{
        const bug = await Bug.findOne({_id: req.body.bugId})
        if(!bug){
            
            return res.status(404).send({error:"Bug not found"})
        }
        try{
            console.log(bug)
            const foundUser = await User.findOne({_id: req.body.user})
            if(!foundUser){
                return res.status(404).send({error:"User not found"})
            }
            console.log(foundUser)
            bug.comms.push({user:foundUser.firtname,message:req.body.message }) 
            const updatedBug = await bug.save()
            console.log("updatedd Bug",updatedBug)
            return res.status(200).send(updatedBug)
        }
        catch(error){
            return res.status(401).send({"msg":"Something went wrong"})
        }
        
       
    }
    catch(error){
        return res.status(401).send({"msg":"Something went wrong"})
    }
}

export const updateComment = (req,res) => {
    return res.status(200).send({"msg":"updating a Comment"})
}

export const deleteComment = (req,res) => {
    return res.status(200).send({"msg":"deleting a Comment"})
}



