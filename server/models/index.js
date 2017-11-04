// var db = require('../db');
var {db, Message, User} = require('../db/our-sequelize');

module.exports = {
  messages: {
    get: function (query) {
      // var sql = 'SELECT * FROM messages';
      // if (query.order === '-createdAt') {
      //   console.log('flipping');
      //   sql += ' ORDER BY createdAt DESC';
      // }
      // db.query(sql, function(err, result) {
      //   if (err) {
      //     console.error('query failure', err);
      //     throw err;
      //   }
      //   cb(result);
      // });

      if (query.order === '-createdAt') {
        return Message.sync().then(() => Message.findAll({order: [['createdAt', 'DESC']]}));
      }
      return Message.sync().then(() => Message.findAll());
    }, // a function which produces all the messages
    post: function (body) {
      // var sql = `INSERT INTO messages (username, text, roomname, createdAt) VALUES ("${body.username}", "${body.text}", "${body.roomname}", now())`;
      // db.query(sql, function(err, result) {
      //   if (err) {
      //     console.error('query failure', err);
      //     throw err;
      //   }
      //   cb();
      // });

      return Message.sync()
        .then(() => Message.create({username: body.username, text: body.text, roomname: body.roomname}))
        .catch(err => {
          console.error(err);
          throw err;
        });
    } // a function which can be used to insert a message into the database
  },

  users: {
    // Ditto as above.
    get: function () {},
    post: function () {}
  }
};

