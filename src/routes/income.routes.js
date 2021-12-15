const express = require('express');
const router = express.Router();
const { createIncome, fetchIncomes, fetchSingleIncome, updateIncome, deleteIncome } = require('../controller/income.controller');
const requireJwt = require('../middleware/requireJwt');

router.post('/create', requireJwt, createIncome);

router.get('/getincomes', fetchIncomes);

router.get('/getincome/:id', requireJwt, fetchSingleIncome);

router.put('/updateincome/:id', requireJwt, updateIncome);

router.delete('/deleteincome/:id', requireJwt, deleteIncome);

module.exports = router;
