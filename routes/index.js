const express = require('express');
const api = require("./api");
const board = require("./api/board");
const router = express.Router();

var mainRouter = require('./main'); // 메인
var signRouter = require('./sign'); // 회원가입
var psy_test1Router = require('./psy_test1'); // 심리검사
var introRouter = require('./intro'); // 홈페이지 소개
var boardRouter = require('./Board'); // 게시판
var counselorRouter = require('./counselor'); // 상담사 연결
var chattestRouter = require('./chatTest');

router.use("/",mainRouter);
router.use("/api",api);
router.use("/board",board);
router.use("/sign",signRouter);
router.use("/psy_test1",psy_test1Router);
router.use("/intro",introRouter);
router.use("/board", boardRouter);
router.use("/counselor", counselorRouter);
router.use("/chatTest", chattestRouter);
module.exports = router;
