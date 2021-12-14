const Income = require('../model/Income');
const expressAsyncHandler = require('express-async-handler');

const createIncome = expressAsyncHandler(async (req, res) => {
    const { title, amount, description, user } = req?.body;
    try {
        const income = await Income.create({
            title,
            amount,
            description,
            user
        });
        res.json(income);
    } catch(e) {
        res.json(e);
    }
})

module.exports = { createIncome };
