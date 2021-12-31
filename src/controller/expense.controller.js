const Expenses = require('../model/expense.model');
const expressAsyncHandler = require('express-async-handler');

const createExpense = expressAsyncHandler(async (req, res) => {
    const { title, amount, description } = req?.body;
    try {
        const newExpense = await Expenses.create({
            title, amount,
            description,
            user: req?.user?._id
        })
        if(newExpense) {
            res?.json(newExpense);
        }
    } catch(e) {
        res?.json(e)
    }
})

const getExpenses = expressAsyncHandler(async (req, res) => {
    const { page } = req?.query;
    try {
        const expenses = await Expenses.paginate({ user: req.user._id }, { limit: 6, page: Number(page), populate: "user" });
        res?.json(expenses);
    } catch(e) {
        res?.json(e);
    }
})

const getSingleExpense = expressAsyncHandler(async (req, res) => {
    const { id } = req?.params;
    try {
        const expenses = await Expenses.findById(id)
        res?.json(expenses);
        console.log('Expenses:', expenses);
    } catch(e) {
        res?.json(e);
        console.log(e);
    }
})

const updateExpense = expressAsyncHandler(async (req, res) => {
    const { id } = req?.params;
    const { title, amount, description } = req?.body;
    try {
        const expenses = await Expenses.findByIdAndUpdate(id, {
            title, amount,
            description
        }, {
            new: true
        })
        res?.json(expenses);
        console.log('Expenses:', expenses);
    } catch(e) {
        res?.json(e);
        console.log(e);
    }
})
const deleteExpense = expressAsyncHandler(async (req, res) => {
    const { id } = req?.params
    try {
        const expenses = await Expenses.findByIdAndDelete(id)
        res?.json(expenses);
        console.log('Expenses:', expenses);
    } catch(e) {
        res?.json(e);
        console.log(e);
    }
})



module.exports = { createExpense, getExpenses, getSingleExpense, updateExpense, deleteExpense };
