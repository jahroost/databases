CREATE DATABASE chat;

USE chat;

/*
Reference the data using the FOR IN syntax from sqool
*/

CREATE TABLE messages (
  id INTEGER(32) AUTO_INCREMENT,
  userid INTEGER(32), 
  message TEXT(256), 
  roomname TEXT(256),
  PRIMARY KEY (ID)
);

CREATE TABLE users (
  id INTEGER(32) AUTO_INCREMENT, 
  name TEXT(256),
  PRIMARY KEY (ID)
);

/* Create other tables and define schemas for them here! */




/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/

/* DROP DATABASE chat(database name)