"use strict";
var express = require('express');
var router = express.Router();

// TODO remove
var { User } = require('./models');

router.get('/login', function(req, res) {
  // optional where
  User.findAll({})
    .then(function(result) {
      res.json(result);
    })
    .catch(function(error) {
      res.status(400).json({ error });
    });
});

router.post('/users', function(req, res) {
  User.create(req.body)
    .then(function(result) {
      res.json(result);
    })
    .catch(function(error) {
      res.status(400).json({ error });
    });
});

router.delete('/users/:id', function(req, res) {
  // TODO delete by id
});

// TODO remove


module.exports = router;
