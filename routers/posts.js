import express from 'express'
import { getPosts, createPosts, updatePosts } from '../controllers/posts.js'

const router = express.Router()

router.get('/',getPosts)
router.post('/',createPosts)
router.post('/update',updatePosts)

export default router