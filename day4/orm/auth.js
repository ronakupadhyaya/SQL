"use strict";

var express = require('express');
var router = express.Router();

router.get('/login', function(req, res) {
  res.render('login');
});

router.get('/register', function(req, res) {
  res.render('register');
});

router.post('/register', async function(req, res, next) {
  if (req.body.password !== req.body.password2) {
    res.status(400).render('register', {
      error: 'Passwords do not match'
    });
  } else {
    // Create a new user using req.body.username and req.body.password
    // then redirect to /login
    try {
      await User.create({ username: req.body.username , password: req.body.password });
    } catch(error){
      res.send(error);
    }
    res.redirect('/login');
  }
});

var passport = require('passport');
var LocalStrategy = require('passport-local');

// Import the User model here
var { User } = require('./models');

passport.serializeUser(function(user, done) {
  done(null, user.id);
});

passport.deserializeUser(async function(id, done) {
  // Find a user by id and call done(null, user)
  var user;
  try {
    user = await User.findById(id);
  } catch(error){
    done(error, false);
    return;
  }
  done(null, user);
});

passport.use(new LocalStrategy( async function(username, password, done) {
  // Find a user by username, if password matches call done(null, user)
  // otherwise call done(null, false)
  var user;
  try {
    user = await User.findOne({ where: {username}});
  } catch(error){
    done(error, false);
    return;
  }
  if(!user || user.password !== password){
    done(null, false);
    return;
  }
  done(null, user);
}));

router.use(passport.initialize());
router.use(passport.session());

router.post('/login', passport.authenticate('local', {
  successRedirect: '/',
  failureRedirect: '/login'
}));

router.get('/logout', function(req, res) {
  req.logout();
  res.redirect('/');
});

module.exports = router;
