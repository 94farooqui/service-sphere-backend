import express from 'express'
import { getAllComments,getComment,addComment,updateComment,deleteComment } from "../controllers/commentRoute.js";

const commentRouter = express.Router();

commentRouter.get("/", getAllComments);
commentRouter.post("/", addComment);
commentRouter.get("/:commentId", getComment);
commentRouter.put("/:commentId", updateComment);
commentRouter.delete("/:commentId", deleteComment);

export default commentRouter;