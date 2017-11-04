var db = require('../db');

module.exports = {
  messages: {
    get: function (query, cb) {
      var sql = 'SELECT * FROM messages';
      if (query.order === '-createdAt') {
        console.log('flipping');
        sql += ' ORDER BY createdAt DESC';
      }
      db.query(sql, function(err, result) {
        if (err) {
          console.error('query failure', err);
          throw err;
        }
        // console.log('Message retrieved succesfully!', result);
        cb(result);
      });
    }, // a function which produces all the messages
    post: function (body, cb) {
      console.log(body);
      var sql = `INSERT INTO messages (username, text, roomname, createdAt) VALUES ("${body.username}", "${body.text}", "${body.roomname}", now())`;
      db.query(sql, function(err, result) {
        if (err) {
          console.error('query failure', err);
          throw err;
        }
        // console.log('Message saved succesfully!', result);
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

