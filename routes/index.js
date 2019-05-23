const express = require('express');
const api = require("./api");
const router = express.Router();

var mainRouter = require('./main');
var usersRouter = require('./users');
var loginRouter = require('./login');
var login2Router = require('./login2');
var signRouter = require('./sign');

router.use("/",mainRouter);
router.use("/api",api);
router.use("/users",usersRouter);
router.use("/login",loginRouter);
router.use("/login2",login2Router);
router.use("/sign",signRouter);

module.exports = router;