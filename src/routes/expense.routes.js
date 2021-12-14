const express = require('express');
const router = express.Router();
const { createExpense, getExpenses, getSingleExpense, updateExpense, deleteExpense } = require('../controller/expense.controller');

router.post('/create', createExpense);

router.get('/getexpenses', getExpenses);

router.get('/getexpense/:id', getSingleExpense);

router.put('/updateexpense/:id', updateExpense);

router.delete('/deleteexpense/:id', deleteExpense);

module.exports = router;
