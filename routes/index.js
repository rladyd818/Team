const express = require('express');
const api = require("./api");
const router = express.Router();

var mainRouter = require('./main');
var usersRouter = require('./users');
var loginRouter = require('./login');

router.use("/",mainRouter);
router.use("/api",api);
router.use("/users",usersRouter);
router.use("/login",loginRouter);

module.exports = router;