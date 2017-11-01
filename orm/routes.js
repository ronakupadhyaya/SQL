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

router.get('/', function(req, res, next) {
  // Display all posts in reverse chronological order
  // YOUR CODE HERE
  res.render('index', {
    user: req.user
  });
});

router.post('/posts', function(req, res, next) {
  // Create a new post
  // req.body.message contains the message user typed in
  // YOUR CODE HERE
});

router.get('/posts/:id', function(req, res, next) {
  // Display a given post by id
  // YOUR CODE HERE
});

router.post('/posts/:id', function(req, res, next) {
  // Update the message column of the given post by id
  // YOUR CODE HERE
  res.render('editPost');
});

router.post('/posts/:id/delete', function(req, res, next) {
  // Delete a given post by id
  // YOUR CODE HERE
});


module.exports = router;
