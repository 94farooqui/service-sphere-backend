import mongoose from "mongoose";
import Comment from "./../models/Comment.js";
import Bug from "./../models/Bug.js";
import User from "../models/User.js";

export const getAllComments = async (req, res) => {
  const bugId = req.params.id;
  // console.log("Params",req.params.id)
  console.log("Showing All Comments");
  try {
    const bug = await Bug.findOne({ _id: bugId }).populate({ path:'comms', populate:{ path:'user', model:'User', select: 'firtname'}});
    console.log(bug);
    return res.status(200).send(bug.comms);
  } catch (error) {
    return res.status(402).send({ error: "someting went wrong" });
  }
};

export const getComment = async (req, res) => {
  console.log("Showing All Comments");
  try {
    const comments = await Comment.find();
    return res.status(200).send(pojects);
  } catch (error) {
    return res.status(401).send({ error: "someting went wrong" });
  }
};

export const addComment = async (req, res) => {
  //const newComment = new Comment(req.body);
  console.log("Bug ID", req.params.id);
  console.log("Comment", req.body);
  try {
    const bug = await Bug.findOne({ _id: req.params.id });
    if (!bug) {
      return res.status(404).send({ error: "Bug not found" });
    }
    try {
      bug.comms.push(req.body);
      const updatedBug = await bug.save();
      console.log("updatedd Bug", updatedBug);
      return res.status(200).send(updatedBug);
    } catch (error) {
      return res.status(401).send({ msg: "Something went wrong" });
    }
  } catch (error) {
    return res.status(401).send({ msg: "Something went wrong" });
  }
};

export const updateComment = (req, res) => {
  return res.status(200).send({ msg: "updating a Comment" });
};

export const deleteComment = (req, res) => {
  return res.status(200).send({ msg: "deleting a Comment" });
};
