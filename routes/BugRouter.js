import express from "express";
import {
  getAllBugs,
  addNewBug,
  updateBug,
  deleteBug,
} from "../controllers/bugRoutes.js";

const bugRouter = express.Router();

bugRouter.get("/", getAllBugs);
bugRouter.post("/", addNewBug);
bugRouter.put("/:id", updateBug);
bugRouter.delete("/:id", deleteBug);

export default bugRouter;
