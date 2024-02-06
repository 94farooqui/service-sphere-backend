import Domain from "../models/Domain.js";

export const getAllDomains = async (req,res)=>{
    try{
        const domains = await Domain.find();
        if(!domains){
            return res.status(502).json({"error":"Server error"})
        }

        return res.status(200).send(domains)
    }
    catch(error){
        return res.status(501).json({"error":"Server error"})
    }
}
export const addDomain = (req,res)=>{
    const {name,description,imageUrl} = req.body;
    try{
        const newDomain = new Domain({name,description,imageUrl})
        newDomain.save()
        return res.status(200).send(newDomain)
    }
    catch(error){
        return res.status(400).send(error)
    }
    
}
export const getDomainDetails = async (req,res)=>{
    
}
export const deleteDomain = (req,res)=>{

}