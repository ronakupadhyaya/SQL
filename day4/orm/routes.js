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
// YOUR CODE HERE
var Post = require('./models').Post;
var User = require('./models').User;

router.get('/', function(req, res, next) {
  // Display all posts in reverse chronological order
  // YOUR CODE HERE
  console.log('req user is', req.user);
  Post.findAll({
    order: [['createdAt', 'DESC']],
    include: {model: User}
  })
    .then((post) => {
      console.log('post in / is: ', post);
      res.render('index', {
        user: post.user,
        posts: post
      });
    })
    .catch((err) => {
      console.log('error finding all the posts', err);
    });
});

router.post('/posts', function(req, res, next) {
  // Create a new post
  // req.body.message contains the message user typed in
  // YOUR CODE HERE
  Post.create({
    message: req.body.message,
    userId: req.user.id
  })
    .then((post) => {
      console.log('success creating post', post);
      res.redirect('/');
    })
    .catch((err) => {
      console.log('error creating post', err);
    });
});

router.get('/posts/:id', function(req, res, next) {
  // Display a given post by id
  // YOUR CODE HERE
  Post.findById(req.params.id, {
    include: {model: User}
  })
    .then((post) => {
      console.log('post found by id is', post);
      res.render('editPost', {post: post});
    })
    .catch((err) => {
      console.log('error finding post by id', err);
    });
});

router.post('/posts/:id', function(req, res, next) {
  // Update the message column of the given post by id
  // YOUR CODE HERE
  // res.render('editPost');
  Post.update({message: req.body.message}, {
    where: {
      id: req.params.id
    }
  })
    .then((post) => {
      console.log('successfully updated post', post);
      res.redirect('/');
    })
    .catch((err) => {
      console.log('error updating post', err);
    });
});

router.post('/posts/:id/delete', function(req, res, next) {
  // Delete a given post by id
  // YOUR CODE HERE
  Post.destroy({
    where: {
      id: req.params.id
    }
  })
    .then((post) => {
      console.log('successfully deleted post', post);
      res.redirect('/');
    })
    .catch((err) => {
      console.log('error deleteing post', err);
    });
});


module.exports = router;
