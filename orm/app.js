"use strict";

var express = require('express');
var app = express();
var moment = require('moment');

var exphbs = require('express-handlebars');
app.engine('.hbs', exphbs({
  extname: '.hbs',
  defaultLayout: 'main.hbs',
  helpers: {
    formatDate(date) {
      return moment(date).fromNow();
    }
  }
}));
app.set('view engine', '.hbs');

var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

var cookieSession = require('cookie-session');
app.use(cookieSession({
  keys: [process.env.SECRET || 'super duper secret string']
}));

var auth = require('./auth');
app.use(auth);

var routes = require('./routes');
app.use(routes);

app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: err
  });
});

var port = process.env.PORT || 3000;
app.listen(port, function () {
  console.log('listening on port ' + port);
});
