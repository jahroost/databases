CREATE DATABASE chat;

USE chat;

CREATE TABLE messages (
  user_id INTEGER(32), message TEXT(256), room_id INTEGER(32)  
);

CREATE TABLE users (
  id INTEGER(32), name TEXT(256)
);

CREATE TABLE room (
  id INTEGER(32), name TEXT(256)
);

/* Create other tables and define schemas for them here! */




/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/

/* DROP DATABASE chat(database name)