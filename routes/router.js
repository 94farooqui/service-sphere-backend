import express from 'express'
import bugRouter from './BugRouter.js'
import userRouter from './UserRouter.js'
import projectRouter  from './ProjectRoutes.js'
import commentRouter from './CommentRouter.js'
import authRouter from './authRouter.js'
import domainRouter from './DomainRouter.js'

const router = express.Router()
//router.use('/bugs/:id/comments', commentRouter )
router.use('/bugs', bugRouter )
router.use('/users', userRouter )
router.use('/projects', projectRouter )
router.use('/auth', authRouter)
router.use('/domains', domainRouter)



export default router;