import mongoose, { Schema } from "mongoose";

export const domainSchema = new mongoose.Schema({
    name: String,
    description: String,
    imageUrl : String
})

const Domain = mongoose.model("Domain", domainSchema)

export default Domain;