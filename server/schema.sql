CREATE DATABASE chat;

USE chat;

CREATE TABLE messages (
  /* Describe your table here.*/
  objectId INT NOT NULL AUTO_INCREMENT,
  username VARCHAR(40) NOT NULL,
  text VARCHAR(100) NOT NULL,
  roomname VARCHAR(40) NOT NULL,
  createdAt DATETIME,
  PRIMARY KEY ( objectId )
);

/* Create other tables and define schemas for them here! */




/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/

