var models = require('../models');
var utils = require('./utils');

var objectIdCounter = 1;
var messages = [
  // Note: an initial message is useful for debugging purposes.
  /*
  {
    text: 'hello world',
    username: 'fred',
    objectId: objectIdCounter
  }
  */
];

module.exports = {
  messages: {
    get: function (req, res) {
      utils.sendResponse(res, {results: messages});
    }, // a function which handles a get request for all messages
    post: function (req, res) {
      utils.collectData(req, function(message) {
        message.objectId = ++objectIdCounter;
        messages.push(message);
        utils.sendResponse(res, {objectId: message.objectId}, 201);
      }); // a function which handles posting a message to the database
  },

  users: {
    // Ditto as above
    get: function (req, res) {},
    post: function (req, res) {}
  }
};

