var db = require('../db');

module.exports = {
  messages: {
    get: function (cb) {
      var sql = 'SELECT * FROM messages';
      db.query(sql, function(err, result) {
        if (err) {
          console.error('query failure', err);
          throw err;
        }
        console.log('Message retrieved succesfully!', result);
        cb(result);
      });
    }, // a function which produces all the messages
    post: function (body, cb) {
      var sql = `INSERT INTO messages (username, text, roomname) VALUES ("${body.username}", "${body.message}", "${body.roomname}")`;
      db.query(sql, function(err, result) {
        if (err) {
          console.error('query failure', err);
          throw err;
        }
        console.log('Message saved succesfully!', result);
        cb();
      });
    } // a function which can be used to insert a message into the database
  },

  users: {
    // Ditto as above.
    get: function () {},
    post: function () {}
  }
};

