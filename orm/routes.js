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

// TODO remove
var { User, Post } = require('./models');

router.get('/', function(req, res, next) {
  Post.findAll({
    include: {model: User},
    order: [['createdAt', 'DESC']]
  })
    .then(function(posts) {
      res.render('index', {
        posts,
        user: req.user
      });
    })
    .catch(function(error) {
      next(error);
    });
});

router.post('/posts', function(req, res, next) {
  Post.create({ userId: req.user.id, body: req.body.post })
    .then(function(result) {
      res.redirect('/');
    })
    .catch(function(error) {
      next(error);
    });
});

router.get('/posts/:id', function(req, res, next) {
  Post.findById(req.params.id, {
    include: {model: User}
  })
    .then(function(post) {
      if (! post) {
        var err = new Error(`Post with id ${req.params.id}`);
        err.status = 404;
        next(err);
      } else {
        res.render('editPost', {
          post: post
        });
      }
    })
    .catch(function(error) {
      next(error);
    });
});

router.post('/posts/:id', function(req, res, next) {
  Post.update({body: req.body.post},
    {where: {id: req.params.id}})
    .then(function(result) {
      res.redirect('/');
    })
    .catch(function(error) {
      next(error);
    });
});

router.post('/posts/:id/delete', function(req, res, next) {
  Post.destroy({ where: {id: req.params.id }})
    .then(function(result) {
      res.redirect('/');
    })
    .catch(function(error) {
      next(error);
    });
});

// TODO remove


module.exports = router;
