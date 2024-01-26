import express from "express";
import {
  getAllBugs,
  addNewBug,
  updateBug,
  deleteBug,
  getBugDetails
} from "../controllers/bugRoutes.js";

const bugRouter = express.Router();

bugRouter.get("/", getAllBugs);
bugRouter.get("/:id", getBugDetails);
bugRouter.post("/", addNewBug);
bugRouter.put("/:id", updateBug);
bugRouter.delete("/:id", deleteBug);

export default bugRouter;
