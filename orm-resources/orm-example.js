/* You'll need to
 *   npm install sequelize
 * before running this example. Documentation is at http://sequelizejs.com/
 */

var Sequelize = require('sequelize');
var db = new Sequelize('chatter', 'student', 'student');
/* TODO this constructor takes the database name, username, then password.
 * Modify the arguments if you need to */

/* first define the data structure by giving property names and datatypes
 * See http://sequelizejs.com for other datatypes you can use besides STRING. */
var User = db.define('User', {
  username: Sequelize.STRING
});

var Message = db.define('Message', {
  userid: { type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true },
  username: Sequelize.STRING,
  text: Sequelize.STRING,
  roomname: Sequelize.STRING
});

/* Sequelize comes with built in support for promises
 * making it easy to chain asynchronous operations together */
Message.sync()
  .then(function() {
    // Now instantiate an object and save it:
    return Message.create({text: 'bonjour', roomname: 'lesmis'});
  })
  .then(function() {
    // Retrieve objects from the database:
    return Message.findAll({ where: {text: 'bonjour'} });
  })
  .then(function(messages) {
    messages.forEach(function(message) {
      console.log(message.text + ' exists');
    });
    db.close();
  })
  .catch(function(err) {
    // Handle any error in the chain
    console.error(err);
    db.close();
  });
