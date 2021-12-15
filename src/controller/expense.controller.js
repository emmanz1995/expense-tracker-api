const Expense = require('../model/expense.model');
const expressAsyncHandler = require('express-async-handler');

const createExpense = expressAsyncHandler(async (req, res) => {
    const { item, cost, description } = req?.body;
    try {
        const newExpense = await Expense.create({
            item, cost,
            description,
            user: req?.user?._id
        })
        if(newExpense) {
            res.json(newExpense);
        }
    } catch(e) {
        res.json(e)
    }
})

const getExpenses = expressAsyncHandler(async (req, res) => {
    const { page } = req?.query;
    try {
        const expenses = await Expense.paginate({}, { limit: 5, page: Number(page), populate: "user" });
        res.json(expenses);
    } catch(e) {
        res.json(e);
        console.log(e);
    }
})

const getSingleExpense = expressAsyncHandler(async (req, res) => {
    const { id } = req?.params;
    try {
        const expenses = await Expense.findById(id)
        res?.json(expenses);
        console.log('Expenses:', expenses);
    } catch(e) {
        res?.json(e);
        console.log(e);
    }
})

const updateExpense = expressAsyncHandler(async (req, res) => {
    const { id } = req?.params;
    const { item, cost, description } = req?.body;
    try {
        const expenses = await Expense.findByIdAndUpdate(id, {
            item, cost,
            description
        }, {
            new: true
        })
        res.json(expenses);
        console.log('Expenses:', expenses);
    } catch(e) {
        res.json(e);
        console.log(e);
    }
})
const deleteExpense = expressAsyncHandler(async (req, res) => {
    const { id } = req?.params
    try {
        const expenses = await Expense.findByIdAndDelete(id)
        res.json('Expense has been successfully deleted!');
        console.log('Expenses:', expenses);
    } catch(e) {
        res.json(e);
        console.log(e);
    }
})



module.exports = { createExpense, getExpenses, getSingleExpense, updateExpense, deleteExpense };
