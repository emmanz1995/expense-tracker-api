const express = require('express');
const router = express.Router();
const expenseController = require('../controller/expense.controller');

router.post('/api/createexpense', expenseController.createExpense);

router.get('/api/getexpenses', expenseController.getExpenses);

module.exports = router;
