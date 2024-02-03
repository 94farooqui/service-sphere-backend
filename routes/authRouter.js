import express from 'express'
import {userLogin, userRegister} from './../controllers/authRoutes.js'
const authRouter = express.Router();

authRouter.post('/login', userLogin)
authRouter.post('/signup', userRegister)

export default authRouter;