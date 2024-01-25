import express from "express";
import {
  getAllUsers,
  addNewUser,
  updateUser,
  deleteUser,
} from "../controllers/userRoutes.js";

const userRouter = express.Router();

userRouter.get("/", getAllUsers);
userRouter.post("/", addNewUser);
userRouter.put("/:id", updateUser);
userRouter.delete("/:id", deleteUser);

export default userRouter;
