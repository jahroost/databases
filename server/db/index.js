var Sequelize = require('Sequelize');
var orm = new Sequelize('chat', 'student', 'student');

var User = orm.define('User', {
  username: Sequelize.STRING
});

var Message = orm.define('Messages', {
  text: Sequelize.STRING,
  roomname: Sequelize.STRING
});

User.hasMany(Message);
Message.belongsTo(User);

User.sync();
Message.sync();

exports.User = User;
exports.Message = Message;




// var mysql = require('mysql');

// // Create a database connection and export it from this file.
// // You will need to connect with the user "root", no password,
// // and to the database "chat".


// // search docs--> how to connect to db

// var con = mysql.createConnection({
//   host: 'localhost',
//   user: 'student',
//   password: 'student',
//   database: 'chat'
// });

// con.connect(function(err) {
//   if (err) { throw err; }
//   console.log('Connected...');
// });

// // need to con.end()


// module.exports = con;