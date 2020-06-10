const models = require('../models/index')
const Comment = models.Comment
const Reaction = models.Reaction
const sequelize = models.sequelize

exports.index = async (req, res, next) => {

  const comments = await Comment.findAll({
    where: {
      postId: req.params.postId,
    }
  });

  res.status(200).json(comments)
}

exports.create = async (req, res, next) => {
  const { text } = req.body
  const { postId } = req.params

  const comment = await Comment.create({postId, userId: 1, text})

  res.status(200).json(comment)
}

exports.like = async (req, res, next) => {
  const commentId = req.params.commentId
  let comment = await Comment.findByPk(commentId)
  let reactions = await Reaction.findAll({
    where: {
      userId: 1,
      userIp: req.ip,
      commentId
    }
  })

  let updatedComment = {}
  if(reactions.length === 0 || reactions[0].reactionType !== 'like') {
    console.log('likeeeeeeeee')
    //console.log(reactions[0].reactionType)
    const t = await sequelize.transaction();
    try {
      await Reaction.create({userId:1, userIp: req.ip, commentId, reactionType: 'like'})
      let updatedCommentParams = {likes: comment.likes + 1}
      if(reactions.length !== 0 && reactions[0].reactionType === 'dislike') {
        await reactions[0].destroy()
        updatedCommentParams.dislikes = comment.dislikes - 1
      }
      updatedComment = await comment.update(updatedCommentParams)
      await t.commit()
    } catch (error) {
      console.log('THERE WAS AN ERROR CREATING LIKE', error)
      await t.rollback();
    }
  }
  else {
    const t = await sequelize.transaction();
    try {
      console.log("pa like")
      await reactions[0].destroy()
      updatedComment = await comment.update({likes: comment.likes - 1})
      await t.commit()
    } catch (error) {
      console.log('THERE WAS AN ERROR DELETING LIKE', error)
      await t.rollback();
    }
  }

  res.status(200).json(updatedComment)
}

exports.dislike = async (req, res, next) => {
  let commentId = req.params.commentId
  let comment = await Comment.findByPk(commentId)
  let reactions = await Reaction.findAll({
    where: {
      userId: 1,
      userIp: req.ip,
      commentId
    }
  })

  let updatedComment = {}
  if(reactions.length === 0 || reactions[0].reactionType !== 'dislike') {
    const t = await sequelize.transaction();
    try {
      await Reaction.create({userId: 1, userIp: req.ip, commentId, reactionType: 'dislike'})
      let updatedCommentParams = {dislikes: comment.dislikes + 1}
      if(reactions.length !== 0 && reactions[0].reactionType === 'like') {
        await reactions[0].destroy()
        updatedCommentParams.likes = comment.likes - 1
      }
      updatedComment = await comment.update(updatedCommentParams)
      await t.commit()
    } catch (error) {
      console.log('THERE WAS AN ERROR CREATING DISLIKE', error)
      await t.rollback();
    }
  }
  else {
    const t = await sequelize.transaction();
    try {
      await reactions[0].destroy()
      updatedComment = await comment.update({dislikes: comment.dislikes - 1})
      await t.commit()
    } catch (error) {
    console.log('THERE WAS AN ERROR DELETING DISLIKE', error)
    await t.rollback();
    }
  }

  res.status(200).json(updatedComment)
}

exports.delete = async (req, res, next) => {
  const {
    commentId: id,
  } = req.params

  const deletedComment = Comment.destroy({
    where: {
      id,
    }
  })

  res.status(204).json(deletedComment)
}