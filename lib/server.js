'use strict';

const express = require('express');
const { signup, signin } = require('./auth');

const server = express();

server.use(express.json());

server.use(express.urlencoded({ extended: true }));

server.use('/signup', signup);
server.use('/signin', signin);

module.exports = {
  server,
  start: (port) => {
    server.listen(port, () => {
      console.log(`Server is running on ${port}`);
    });
  },
};
