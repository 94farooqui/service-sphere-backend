import express from 'express'
import { addNewComment } from "../controllers/commentRoute.js";

const commentRouter = express.Router();

commentRouter.post("/", addNewComment);

export default commentRouter;