const express = require('express');
const router = express.Router();
const { createExpense, getExpenses, getSingleExpense, updateExpense, deleteExpense } = require('../controller/expense.controller');
const requireJwt = require('../middleware/requireJwt');

router.post('/create', requireJwt, createExpense);

router.get('/getexpenses', getExpenses);

router.get('/getexpense/:id', requireJwt, getSingleExpense);

router.put('/updateexpense/:id', requireJwt, updateExpense);

router.delete('/deleteexpense/:id', requireJwt, deleteExpense);

module.exports = router;
