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
var { User, Post } = require('./models');

router.get('/', function(req, res, next) {
  // Display all posts in reverse chronological order
  Post.findAll({
    include: User,
    order: [['createdAt', 'DESC']]
  }).then(posts => {
    res.render('index', {
      user: req.user,
      posts
    });
  }).catch(e => res.json(e));
});

router.post('/posts', function(req, res, next) {
  // Create a new post
  // req.body.message contains the message user typed in
  Post.create({ message: req.body.message, userId: req.user.id })
    .then(() => res.redirect('/')).catch(e => res.json(e));
});

router.get('/posts/:id', function(req, res, next) {
  // Display a given post by id
  Post.findById(req.params.id, {
    include: User
  }).then(post => {
    res.render('editPost', { post });
  }).catch(e => res.json(e));
});

router.post('/posts/:id', function(req, res, next) {
  // Update the message column of the given post by id
  Post.update({ message: req.body.message },
    { where: { id: req.params.id }
    }).then(() => res.redirect('/')).catch(e => res.json(e));
});

router.post('/posts/:id/delete', function(req, res, next) {
  // Delete a given post by id
  Post.destroy({ where: { id: req.params.id }
  }).then(() => res.redirect('/')).catch(e => res.json(e));
});


module.exports = router;
