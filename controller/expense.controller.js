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
            res.status(200).send(expenses);
            console.log('Expenses:', expenses);
        } catch(e) {
            res.status(500).send({ message: e.message });
            console.log(e.message);
        }
    }
}

module.exports = expenseController;
