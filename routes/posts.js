const express = require('express');
const router = express.Router();

const postsController = require('../controllers/posts.js');

router.get('/posts/:postId', postsController.show)
router.get('/posts', postsController.index)
router.post('/post/:postId/like', postsController.like)
router.post('/post/:postId/dislike', postsController.dislike)
router.post('/post', postsController.create)

module.exports = router
