const Income = require('../model/income.model');
const expressAsyncHandler = require('express-async-handler');

const createIncome = expressAsyncHandler(async (req, res) => {
    const { title, amount, description, user } = req?.body;
    try {
        const income = await Income.create({
            title, amount,
            description, user
        });
        res.json(income);
    } catch(e) {
        res.json(e);
    }
})

const fetchIncomes = expressAsyncHandler(async (req, res) => {
    try {
        const income = await Income.find({});
        res.json(income);
    } catch(e) {
        res.json(e);
    }
})

const fetchSingleIncome = expressAsyncHandler(async (req, res) => {
    const { id } = req?.params;
    try {
        const income = await Income.findById(id);
        res.json(income);
    } catch(e) {
        res.json(e);
    }
})

const updateIncome = expressAsyncHandler(async (req, res) => {
    const { title, amount, description } = req?.body;
    const { id } = req?.params;
    try {
        const income = await Income.findByIdAndUpdate(id, {
            title, amount,
            description
        }, {
            new: true
        });
        res.json(income);
    } catch(e) {
        res.json(e);
    }
})

const deleteIncome = expressAsyncHandler(async (req, res) => {
    const { id } = req?.params;
    try {
        const income = await Income.findByIdAndDelete(id);
        res.json('Income has been deleted successfully!');
    } catch(e) {
        res.json(e);
    }
})

module.exports = { createIncome, fetchIncomes, fetchSingleIncome, updateIncome, deleteIncome };
