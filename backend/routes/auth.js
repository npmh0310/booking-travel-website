var express = require('express');
const { login, register } = require('../controllers/authController');

const authRoute = express.Router();

authRoute.post("/login", login);
authRoute.post("/register", register);

module.exports = authRoute;