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
var depressRouter= require('./depress'); //우울 검사
var anxietyRouter= require('./anxiety'); //불안 검사
var alcoholicRouter= require('./alcoholic'); //알코올중독 검사
var suicideRouter= require('./suicide'); //자살위험검사
var counselor_introRouter = require('./counselor_intro'); // 상담사 연결
var sign_cRouter = require('./sign_c'); // 상담사 회원가입
var signupRouter = require('./signup'); // 회원가입 선택

router.use("/",mainRouter);
router.use("/api",api);
router.use("/board",board);
router.use("/sign",signRouter);
router.use("/psy_test1",psy_test1Router);
router.use("/intro",introRouter);
router.use("/board", boardRouter);
router.use("/counselor", counselorRouter);
router.use("/chatTest", chattestRouter);
router.use("/depress",depressRouter);
router.use("/anxiety",anxietyRouter);
router.use("/alcoholic",alcoholicRouter);
router.use("/suicide",suicideRouter);
router.use("/counselor_intro", counselor_introRouter);
router.use("/sign_c",sign_cRouter);
router.use("/signup",signupRouter);

module.exports = router;
