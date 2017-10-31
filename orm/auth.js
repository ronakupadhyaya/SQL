"use strict";

var express = require('express');
var router = express.Router();

// TODO delete how much of this?
var passport = require('passport');
var LocalStrategy = require('passport-local');

var { User } = require('./models');

passport.serializeUser(function(user, done) {
  done(null, user.id);
});

passport.deserializeUser(function(id, done) {
  User.findById(id)
    .then(function(result) {
      done(null, result);
    })
    .catch(function(error) {
      done(error);
    });
});

// passport strategy
passport.use(new LocalStrategy(function(username, password, done) {
  User.findOne({
    where: { username }
  })
    .then(function(user) {
      if (user && user.password === password) {
        done(null, user);
      } else {
        done(null, false);
      }
    })
    .catch(function(error) {
      done(error);
    });
}));

router.use(passport.initialize());
router.use(passport.session());

router.get('/login', function(req, res) {
  res.render('login');
});

router.post('/login', passport.authenticate('local', {
  successRedirect: '/',
  failureRedirect: '/login'
}));

router.get('/register', function(req, res) {
  res.render('register');
});

router.post('/register', function(req, res, next) {
  if (req.body.password !== req.body.password2) {
    res.status(400).render('register', {
      error: 'Passwords do not match'
    });
  } else {
    User.create({ username: req.body.username, password: req.body.password })
      .then(function() {
        res.redirect('/login');
      })
      .catch(function(error) {
        next(error);
      });
  }
});

router.get('/logout', function(req, res) {
  req.logout();
  res.redirect('/');
});

module.exports = router;
