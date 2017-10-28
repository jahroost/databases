var models = require('../models');
var bluebird = require('bluebird');

var userFields = ['username'];
var messageFields = ['message', 'username', 'roomname'];


module.exports = {
  messages: {
    get: function (req, res) {
      Message.findAll({ include: [User] })
        .complete(function(err, results) {
          if (err) { throw err; }
          res.json(results);
        });
    },
    post: function (req, res) {
      User.findOrCreate({username: req.body[username]})
        .complete(function(err, user) {
          var params = { 
            message: req.body[message], 
            username: user.id, 
            roomname: req.body[roomname] 
          };
          Message.create(params)
            .complete(function(err, results) {
              res.sendStatus(201);
            });
        });
    }
  },

  users: {
    get: function (req, res) {
      User.findAll()
        .complete(function(err, results) {
          if (err) { throw err; }
          res.json(results);
        });
    },
    post: function (req, res) {
      User.create({username: req.body[username]})
        .complete(function(err, user) {
          if (err) { throw err; }
          res.sendStatus(201);
        });
    }
  }
};



