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

var Post = require('./models.js').Post;
var User = require('./models.js').User;

router.get('/', function(req, res, next) {
  // Display all posts in reverse chronological order
  // YOUR CODE HERE

  Post.findAll({
    include: {model: User},
    order: [['createdAt', 'DESC']]
  })
  .then(function(posts){
    res.render('index', {
      user: req.user,
      posts: posts
    })
  })
  .catch(function(error){console.log('there was an error loading the posts', error)}) 
});

router.post('/posts', function(req, res, next) {
  // Create a new post
  // req.body.message contains the message user typed in
  // YOUR CODE HERE

  Post.create({userId: req.user.id, message: req.body.message})
  .then(function(){res.redirect('/')})
  .catch(function(error){console.log('there was an error', error)})

});

router.get('/posts/:id', function(req, res, next) {
  // Display a given post by id
  // YOUR CODE HERE

  Post.findById(req.params.id, {
    include: {model: User}
  })
  .then(function(post){
    res.render('editPost', {
      post: post
    })
  })
  .catch(function(error){console.log('there was an error getting to your post', error)})

});

router.post('/posts/:id', function(req, res, next) {
  // Update the message column of the given post by id
  // YOUR CODE HERE
  Post.update({message: req.body.message}, {where: {id: req.params.id}})
  .then(function(){res.redirect('/')})
  .catch(function(err){console.log('you messed up', err)})
});

router.post('/posts/:id/delete', function(req, res, next) {
  // Delete a given post by id
  // YOUR CODE HERE

  Post.destroy({where: {id: req.params.id}})
  .then(function(){res.redirect('/')})
  .catch(function(error){console.log('your post does not want to go away. please seek help', error)})

});


module.exports = router;
