var db = require('../db');
var qs = require('qs');

module.exports = {
  messages: {
    get: function (callback) {
      var queryString = 'SELECT messages.id, messages.message, messages.roomname users.username FROM messages \
      LEFT OUTER JOIN users ON (messages.userid = users.id) \
      ORBER BY messages.id DESC';

      db.query(queryString, function(err, results) {
        callback(results);
      });          
    },

    post: function (params, callbacks) {
      var queryString = 'INSERT INTO messages (message, userid, roomname) \
                      VALUES (?, (SELECT id FROM users WHERE username = ? LIMIT 1), ?)';

      db.query(queryString, params, function(err, results) {
        callback(results);
      });
    }
  },

  users: {
    get: function (callback) {
      var queryString = 'SELECT * FROM users';
      db.query(queryString, function(err, results) {
        callback(results);
      });
    },
    post: function (params, callback) {
      var queryString = 'INSERT INTO users (username) VALUES (?)';
      db.query(queryString, params, function(err, results) {
        callback(results);
      });
    }
  }
};

