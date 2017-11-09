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

var {sequelize, Sequelize, Post, User} = require('./models');

router.get('/', function(req, res, next) {
  // Display all posts in reverse chronological order
  // YOUR CODE HERE
  getPosts();
  async function getPosts() {
    try {
    const posts = await Post.findAll({
      include: [{ model: User }],
      order: [['createdAt', 'DESC']],
    });
      res.render('index', {
        user: req.user,
        posts,
      });
    } catch (err) {
      res.send(err);
    }
  }
});

router.post('/posts', function(req, res, next) {
  // Create a new post
  // req.body.message contains the message user typed in
  // YOUR CODE HERE
  createPost();
  async function createPost() {
    try {
      await Post.create({message: req.body.message, userId: req.user.id});
      res.redirect('/');
    } catch (err) {
      res.send(err);
    }
  }
});

router.get('/posts/:id', function(req, res, next) {
  // Display a given post by id
  // YOUR CODE HERE
  getPost();
  async function getPost() {
    try {
      const post = await Post.findById(req.params.id, {include: [{model: User}]});
      res.render('editPost', {post});
    } catch (err) {
      res.send(err);
    }
  }
});

router.post('/posts/:id', function(req, res, next) {
  // Update the message column of the given post by id
  // YOUR CODE HERE
  updatePost();
  async function updatePost() {
    try {
      await Post.update({message: req.body.message},
        { where: {id: req.params.id} });
      res.redirect('/');
    } catch (err) {
      res.send(err);
    }
  }
  res.render('editPost');
});

router.post('/posts/:id/delete', function(req, res, next) {
  // Delete a given post by id
  // YOUR CODE HERE
  deletePost();
  async function deletePost() {
    try {
      await Post.destroy({ where: {id: req.params.id} });
      res.redirect('/');
    } catch (err) {
      res.send(err);
    }
  }
});


module.exports = router;
