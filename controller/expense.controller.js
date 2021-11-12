const mongoose = require('mongoose');
const Expense = mongoose.model('expense');

const expenseController = {
    createExpense: async (req, res) => {
        try {
            const { item, cost, category, image, description } = req.body;
            if(!item || !cost || !description) {
                return res.status(422).send({ message: 'Empty fields, type something in!' });
            }
            const newExpense = new Expense({ item, cost, category, image, description })
            const savedExpense = await newExpense.save()
            if(savedExpense) {
                res.status(201).send(savedExpense)
            }
        } catch(e) {
            res.status(500).send({ message: e.message })
        }
    },
    getExpenses: async (req, res) => {
        try {
            const expenses = await Expense.find()
            let findExpenses = []
            // expenses.forEach(async (expense) => {
            //     await expense.push(findExpenses);
            // })
            for (const expense of expenses) {
                await expense.push(findExpenses);
            }
            res.status(200).send(findExpenses);
            console.log('Expenses:', findExpenses);
        } catch(e) {
            res.status(500).send({ message: e.message });
            console.log(e.message);
        }
    },
    calucateExpenses: async (req, res) => {
        try {
            const calculation = await Expense.aggregate([
                {$expense: { cost: null }}
            ])
        } catch(e) {}
    }
}

module.exports = expenseController;
