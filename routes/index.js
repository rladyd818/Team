const express = require('express');
const api = require("./api/index");
const router = express.Router();

router.use("/api",api);

module.exports = router;