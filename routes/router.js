import express from 'express'
import bugRouter from './BugRouter.js'
import userRouter from './UserRouter.js'

const router = express.Router()

router.use('/bugs', bugRouter )
router.use('/users', userRouter )


export default router;