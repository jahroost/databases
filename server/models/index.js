var db = require('../db');
var qs = require('qs');

module.exports = {
  messages: {
    get: function (callback) {
      // query database
        // use query strings
          //callback(data)

      var queryString = 'SELECT * FROM messages';

      db.query(queryString, function(err, rows, fields) {
        if (err) { throw err; }

        console.log('IN ROWS: ', rows);

        for (var i in rows) {
          console.log('Messages: ', rows.message);
        }
      });

          
    }, // a function which produces all the messages
    post: function () {



    } // a function which can be used to insert a message into the database
  },

  users: {
    // Ditto as above.
    get: function () {},
    post: function () {}
  }
};

