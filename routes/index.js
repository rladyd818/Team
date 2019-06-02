const express = require('express');
const api = require("./api");
const board = require("./api/board");
const router = express.Router();

var mainRouter = require('./main');
var usersRouter = require('./users');
var loginRouter = require('./login');
var login2Router = require('./login2(폐기)');
var signRouter = require('./sign');
var psy_test1Router = require('./psy_test1');
var introRouter = require('./intro');
var boardRouter = require('./Board');

router.use("/",mainRouter);
router.use("/api",api);
router.use("/board",board);
router.use("/users",usersRouter);
router.use("/login",loginRouter);
//router.use("/login2",login2Router); 폐기
router.use("/sign",signRouter);
router.use("/psy_test1",psy_test1Router);
router.use("/intro",introRouter);
router.use("/board", boardRouter);
module.exports = router;