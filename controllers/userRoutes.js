import mongoose from "mongoose"
import User from "../models/User.js"

export const getAllUsers = (req,res) => {
    console.log("Showing All Users")
    return res.status(200).send({"msg":"Showing all Users"})
}

export const addNewUser = (req,res) => {
    console.log(req.body)
    return res.status(200).send({"msg":"Adding new User"})
}

export const updateUser = (req,res) => {
    return res.status(200).send({"msg":"updating a User"})
}

export const deleteUser = (req,res) => {
    return res.status(200).send({"msg":"deleting a User"})
}



