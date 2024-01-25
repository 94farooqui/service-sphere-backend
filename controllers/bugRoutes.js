import mongoose from "mongoose"

export const getAllBugs = (req,res) => {
    console.log("Showing All Bugs")
    return res.status(200).send({"msg":"Showing all bugs"})
}

export const addNewBug = (req,res) => {
    return res.status(200).send({"msg":"Adding new bug"})
}

export const updateBug = (req,res) => {
    return res.status(200).send({"msg":"updating a bug"})
}

export const deleteBug = (req,res) => {
    return res.status(200).send({"msg":"deleting a bug"})
}



