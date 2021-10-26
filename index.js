'use strict';

const { database } = require('./lib/models');
const server = require('./lib/server.js');
require('dotenv').config();

const PORT = process.env.PORT;

// Make sure the tables are created then start the server
database.sync().then(() => {
  server.start(PORT);
});
