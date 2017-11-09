"use strict";
var express = require('express');
var router = express.Router();

router.use(function(req, res, next) {
  if (! req.user) {
    res.redirect('/login');
  } else {
    next();
  }
});


// Import models here
var { Post, User } = require('./models');

router.get('/', async function(req, res, next) {
  // Display all posts in reverse chronological order
  var posts;
  try{
    posts = await Post.findAll({
      order: [['createdAt','DESC']],
      include: { model: User }
    });
  } catch(error){
    console.log(error);
    res.send(error);
    return;
  }
  console.log(posts);
  res.render('index', {
    user: req.user,
    posts
  });
});

router.post('/posts', async function(req, res, next) {
  // Create a new post
  // req.body.message contains the message user typed in
  try {
    await Post.create({ message: req.body.message , userId: req.user.id });
  } catch(error){
    res.send(error);
    return;
  }
  res.redirect('/');
});

router.get('/posts/:id', async function(req, res, next) {
  // Display a given post by id
  var post;
  try {
    post = await Post.findById(req.params.id, {
      include: { model: User }
    });
  } catch(error){
    res.send(error);
    return;
  }
  res.render('editPost', { post });
});

router.post('/posts/:id', async function(req, res, next) {
  // Update the message column of the given post by id
  try {
    await Post.update({ message: req.body.message }, { where : { id: req.params.id} });
  } catch(error){
    res.send(error);
    return;
  }
  res.redirect('/');
});

router.post('/posts/:id/delete', async function(req, res, next) {
  // Delete a given post by id
  try {
    await Post.destroy({ where: { id: req.params.id } });
  } catch(error){
    res.send(error);
    return;
  }
  res.redirect('/');
});


module.exports = router;
