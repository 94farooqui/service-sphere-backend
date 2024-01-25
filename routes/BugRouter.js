import express from "express";
import {
  getAllBugs,
  addNewBug,
  updateBug,
  deleteBug,
} from "../controllers/bugRoutes.js";

const router = express.Router();

router.get("/bugs", getAllBugs);
router.post("/bugs", addNewBug);
router.put("/bugs/:id", updateBug);
router.delete("/bugs/:id", deleteBug);

export default router;
