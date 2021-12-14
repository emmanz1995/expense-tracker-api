const express = require('express');
const router = express.Router();
const { createIncome, fetchIncomes, fetchSingleIncome, updateIncome, deleteIncome } = require('../controller/incomeCtrl');

router.post('/create', createIncome);

router.get('/getincomes', fetchIncomes);

router.get('/getincome/:id', fetchSingleIncome);

router.put('/updateincome/:id', updateIncome);

router.delete('/deleteincome/:id', deleteIncome);

module.exports = router;
