import express from "express";
import {
  getAllProjects,
  addNewProject,
  updateProject,
  deleteProject,
} from "../controllers/projectRoutes.js";

const projectRouter = express.Router();

projectRouter.get("/", getAllProjects);
projectRouter.post("/", addNewProject);
projectRouter.put("/:id", updateProject);
projectRouter.delete("/:id", deleteProject);

export default projectRouter;
