'use strict';

const bcrypt = require('bcrypt');
const base64 = require('base-64');
const users = require('../user.js');

const signin = async (req, res) => {
  basicAuth();
  res.status(200).json(user);
};

const basicAuth = async (req, res, next) => {
  const basicHeaderParts = req.headers.authorization.split(' ');
  const encodedString = basicHeaderParts.pop();
  const decodedString = base64.decode(encodedString);
  const [username, password] = decodedString.split(':');
  try {
    const user = await users.findOne({ where: { username: username } });
    const valid = await bcrypt.compare(password, user.password);
    if (valid) {
      next();
    } else {
      next('Invalid user');
    }
  } catch (error) {
    next('');
  }
};

module.exports = signin;
