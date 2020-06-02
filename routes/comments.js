const express = require('express');
const router = express.Router();

const commentsController = require('../controllers/comments');

router.get('/posts/:postId/comments', commentsController.index)
router.post('/comment/:commentId/like', commentsController.like)
router.post('/comment/:commentId/dislike', commentsController.dislike)
router.post('/posts/:postId/comment', commentsController.create)
router.post('/posts/:commentId/comment/delete', commentsController.delete)

module.exports = router
