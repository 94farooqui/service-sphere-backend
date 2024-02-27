import express from "express";
import {  getAllBugs,  addNewBug,  updateBug,  deleteBug,  getBugDetails} from "../controllers/bugRoutes.js";
import { getAllComments,getComment,addComment,updateComment,deleteComment } from "../controllers/commentRoute.js";
import authenticateToken from "../middlewares/authMiddleware.js";

const bugRouter = express.Router();

bugRouter.get("/", authenticateToken,getAllBugs);
bugRouter.get("/:id", getBugDetails);
bugRouter.post("/", addNewBug);
bugRouter.put("/:id", updateBug);
bugRouter.delete("/:id", deleteBug);

bugRouter.get("/:id/comments/", getAllComments);
bugRouter.post("/:id/comments/", addComment);
bugRouter.get("/:id/comments/:commentId", getComment);
bugRouter.put("/:id/comments/:commentId", updateComment);
bugRouter.delete("/:id/comments/:commentId", deleteComment);

export default bugRouter;
