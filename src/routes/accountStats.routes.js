const express = require('express');
const router = express.Router();
const { accountStatsCtrl } = require('../controller/accountStats.controller');
const requireJwt = require('../middleware/requireJwt');


router.get('/accountstats', accountStatsCtrl);

module.exports = router;

