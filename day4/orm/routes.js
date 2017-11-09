"use strict";
var express = require('express');
var router = express.Router();
var Post = require('./models').Post;
var User = require('./models').User;
var Sequelize = require('sequelize');
router.use(function(req, res, next) {
  if (! req.user) {
    res.redirect('/login');
  } else {
    next();
  }
});


// Import models here
// YOUR CODE HERE

router.get('/', function(req, res, next) {
  // Display all posts in reverse chronological order
  // YOUR CODE HERE
  Post.findAll({order: [['createdAt', 'DESC']], include: [{
    model: User
  }
  ]})
    .then(posts => {
      res.render('index', {
        user: req.user,
        posts
      });
    });

});

router.post('/posts', function(req, res, next) {
  // Create a new post
  // req.body.message contains the message user typed in
  // YOUR CODE HERE
  Post.create({message: req.body.message, userId: req.user.id}).then(post => {
    res.redirect('/');
  });
});

router.get('/posts/:id', function(req, res, next) {
  // Display a given post by id
  // YOUR CODE HERE
  Post.find({where: {id: req.params.id}, include: {model: User}}).then(post => {
    res.render('editPost', {post});
  });
});

router.post('/posts/:id', function(req, res, next) {
  // Update the message column of the given post by id
  // YOUR CODE HERE
  Post.update({message: req.body.message}, {where: {id: req.params.id}})
    .then(post => {
      res.redirect('/');
    });

});

router.post('/posts/:id/delete', function(req, res, next) {
  // Delete a given post by id
  // YOUR CODE HERE
  Post.destroy({where: {id: req.params.id}}).then(() => {
    res.redirect('/');
  });
});


module.exports = router;
