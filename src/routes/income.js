const express = require('express');
const router = express.Router();
const { createIncome } = require('../controller/incomeCtrl');

router.post('/create', createIncome);

// router.post('/login', loginUser);
//
// router.get('/getusers', getUsers);

module.exports = router;
