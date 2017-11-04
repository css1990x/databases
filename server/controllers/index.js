var models = require('../models');

module.exports = {
  messages: {
    get: function (req, res) {
      // models.messages.get(req.query, function(messages) {
      //   res.send(messages);
      // });

      models.messages.get(req.query).then(msgs => res.send(msgs));
    }, // a function which handles a get request for all messages
    post: function (req, res) {
      // models.messages.post(req.body, function() {
      //   res.send();
      // });

      models.messages.post(req.body).then(() => res.send());
    } // a function which handles posting a message to the database
  },

  users: {
    // Ditto as above
    get: function (req, res) {},
    post: function (req, res) {
      res.send();
    }
  }
};
