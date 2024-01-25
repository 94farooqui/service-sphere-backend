import express from 'express'
import bugRouter from './BugRouter.js'
import userRouter from './UserRouter.js'
import projectRouter  from './ProjectRoutes.js'

const router = express.Router()

router.use('/bugs', bugRouter )
router.use('/users', userRouter )
router.use('/projects', projectRouter )


export default router;