import mongoose from "mongoose"
import Project from './../models/Project.js'

export const getAllProjects = async (req,res) => {
    //console.log("Showing All Projects")
    try{
        const pojects = await Project.find()
        return res.status(200).send(pojects)
    }
    catch(error){
        return res.status(401).send({"error":"someting went wrong"})
    }
    
}
export const getProject = async (req,res) => {
    try{
        const project = await Project.findOne({_id: req.params.id})
        //console.log(project)
        return res.status(200).send(project)
    }
    catch(error){
        console.log(error)
        return res.status(404).send(error)
    }
}
export const addNewProject = async (req,res) => {
    const newProject = new Project(req.body)
    console.log(req.body)
    try{
        const project = await newProject.save()
        res.status(200).send(project)
    }
    catch(error){
        res.status(401).send({"msg":"Something went wrong"})
    }
}

export const updateProject = (req,res) => {
    return res.status(200).send({"msg":"updating a Project"})
}

export const deleteProject = (req,res) => {
    return res.status(200).send({"msg":"deleting a Project"})
}



