import express from 'express'
import {userLogin, userRegister, tokenVerify} from './../controllers/authRoutes.js'
const authRouter = express.Router();

authRouter.post('/login', userLogin)
authRouter.post('/signup', userRegister)
authRouter.post('/verifyToken', tokenVerify)
export default authRouter;