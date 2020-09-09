const express = require('express');
const router = express.Router();
const Posts = require('../data/db.js');

router
.route('/')
.get(async (req,res)=>{
    const posts = await Posts.find();
  try {
    res.status(200).json(posts);
  }
  catch {
    res.status(500).json({ message: 'The posts information could not be retrieved' })
  }
})

router.get('/:id',async (req,res)=>{
  try{
    const post = await Posts.findById(req.params.id);
    if (post.id = req.params.id){
      res.status(200).json(post)
    }else{
      res.status(404).json({message:"could not find it by Id"})
    }
  }catch{
    res.status(500).json({ message: 'The post not found in server' })
  }

})

router.get('/:id/comments',async (req,res)=>{
  try{
    const postComments = await Posts.findPostComments(req.params.id);
    if (postComments.id = req.params.id){
      res.status(200).json(postComments)
    }else{
      res.status(404).json({message:"could not find comments by Id"})
    }
  }catch{
    res.status(500).json({ message: 'The post not found in server' })
  }

})

router.delete('/:id',async (req,res)=>{
  try{
    const DeletePost = await Posts.remove(req.params.id);
    if (DeletePost.id = req.params.id){
      res.status(200).json(DeletePost)
    }else{
      res.status(404).json({message:"could not find it by Id"})
    }
  }catch{
    res.status(500).json({ message: 'The post not found in server' })
  }

})

router.post(`/`, async (req, res) => {
    const post = req.body;
    try {
      const inserted = await Posts.insert(post)
      if (!post.title || !post.contents) {
        res.status(400).json({ message: 'Please provide title and contents for the post' })
      } else {
        res.status(201).json(inserted);
      }
    }
    catch {
      res.status(500).json({ message: 'There was an error while saving the post to the database' })
    }
  })


module.exports = router;