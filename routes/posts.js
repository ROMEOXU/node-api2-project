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