import mongoose from "mongoose"
import User from "../models/User.js"

export const getAllUsers = async (req,res) => {
    console.log("Showing All Users")
    const users = await User.find()
    return res.status(200).json(users)
}

export const addNewUser = async (req,res) => {
    const newUser = new User(req.body)
    //console.log(req.body)
    try{
        const user = await newUser.save()
        res.status(200).send(user)
    }
    catch(error){
        res.status(401).send({"msg":"Something went wrong"})
    }
}

export const updateUser = (req,res) => {
    return res.status(200).send({"msg":"updating a User"})
}

export const deleteUser = (req,res) => {
    return res.status(200).send({"msg":"deleting a User"})
}



