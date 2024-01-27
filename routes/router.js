import express from 'express'
import bugRouter from './BugRouter.js'
import userRouter from './UserRouter.js'
import projectRouter  from './ProjectRoutes.js'
import commentRouter from './CommentRouter.js'

const router = express.Router()

router.use('/bugs', bugRouter )
router.use('/users', userRouter )
router.use('/projects', projectRouter )
router.use('/comments', commentRouter )


export default router;