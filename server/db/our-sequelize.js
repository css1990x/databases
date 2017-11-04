var Sequelize = require('sequelize');
var db = new Sequelize('chat', 'student', 'student');
/* TODO this constructor takes the database name, username, then password.
 * Modify the arguments if you need to */

/* first define the data structure by giving property names and datatypes
 * See http://sequelizejs.com for other datatypes you can use besides STRING. */
var User = db.define('User', {
  username: Sequelize.STRING
});

var Message = db.define('Message', {
  objectId: { type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true },
  username: Sequelize.STRING,
  text: Sequelize.STRING,
  roomname: Sequelize.STRING
});

/* Sequelize comes with built in support for promises
 * making it easy to chain asynchronous operations together */
// Message.sync()
//   .then(function() {
//     // Now instantiate an object and save it:
//     return Message.create({text: 'hola', roomname: 'the-wall'});
//   })
//   .then(function() {
//     // Retrieve objects from the database:
//     return Message.findAll({ where: {roomname: 'the-wall'} });
//   })
//   .then(function(messages) {
//     messages.forEach(function(message) {
//       console.log(message.text + ' exists');
//     });
//     db.close();
//   })
//   .catch(function(err) {
//     // Handle any error in the chain
//     console.error(err);
//     db.close();
//   });

module.exports = { db, User, Message };
