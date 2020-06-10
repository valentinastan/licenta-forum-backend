const models = require('../models/index')
const Post = models.Post
const Comment = models.Comment
const Reaction = models.Reaction
const User = models.User
const sequelize = models.sequelize

exports.index = async (req, res, next) => {
  const posts = await Post.findAll()

  res.status(200).json(posts)
}

exports.create = async (req, res, next) => {
  const {
    title,
    text,
  } = req.body

  const post = await Post.create({userId: 1, title, text})

  res.status(200).json(post)
}

exports.show = async (req, res, next) => {
  const postId = req.params.postId

  const post = await Post.findAll({
    where: {
      id: postId
    },
    include: [{
      model: Comment,
     }]
  })

  res.status(200).json(post)
}

exports.like = async (res, req, next) => {
  //console.log(req, req.req.params)
  const postId = req.req.params.postId
  const post = await Post.findByPk(postId)
  const reactions = await Reaction.findAll({
    where: {
      userId: 1,
      userIp: req.ip,
      postId,
    }
  })

  let updatedPost = {}
  if(reactions.length === 0 || reactions[0].reactionType !== 'like') {
    const t = await sequelize.transaction();
    try {
      await Reaction.create({userId: 1, userIp: req.ip, postId, reactionType: 'like'})
      let updatePostParams = {likes: post.likes + 1}
      if(reactions.length !== 0 && reactions[0].reactionType === 'dislike') {
        await reactions[0].destroy()
        updatePostParams.dislikes = post.dislikes - 1
      }
      updatedPost = await post.update(updatePostParams)
      await t.commit()
    } catch (error) {
      console.log('THERE WAS AN ERROR CREATING LIKE', error)
      await t.rollback();
    }
  }
  else {
    const t = await sequelize.transaction();
    try {
      await reactions[0].destroy()
      updatedPost = await post.update({likes: post.likes - 1})
      await t.commit()
    } catch (error) {
      console.log('THERE WAS AN ERROR DELETING LIKE', error)
      await t.rollback();
    }
  }
  res.res.status(200).json(updatedPost)
}

exports.dislike = async (req, res, next) => {
  const postId = req.params.postId
  const post = await Post.findByPk(postId)
  const reactions = await Reaction.findAll({
    where: {
      userId: 1,
      userIp: req.ip,
      postId
    }
  })

  let updatedPost = {}
  if(reactions[0].length === 0 || reactions[0].reactionType !== 'dislike') {
    const t = await sequelize.transaction();
    try {
      await Reaction.create({userId: 1, userIp: req.ip, postId, reactionType: 'dislike'})
        let updatePostParams = {dislikes: post.dislikes + 1}
      if(reactions[0].length !== 0 && reactions[0].reactionType === 'like') {
        await reactions[0].destroy()
        updatePostParams.likes = post.likes - 1
      }
      updatedPost = await post.update(updatePostParams)
      await t.commit()
    } catch (error) {
      console.log('THERE WAS AN ERROR CREATING DISLIKE', error)
      await t.rollback();
    }
  }
  else {
    console.log(reactions[0])
    const t = await sequelize.transaction();
    try {
      await reactions[0].destroy()
      updatedPost = await post.update({dislikes: post.dislikes - 1})
      await t.commit()
    } catch (error) {
      console.log('THERE WAS AN ERROR DELETING DISLIKE', error)
      await t.rollback();
    }
  }
  res.status(200).json(updatedPost)
}
