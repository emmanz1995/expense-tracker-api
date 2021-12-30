const expressAsyncHandler = require('express-async-handler');
const Expense = require("../model/expense.model");
const Income = require("../model/income.model");

const accountStatsCtrl = expressAsyncHandler(async (req, res) => {
    const expensesStats = await Expense.aggregate([
        //filter
        { $match: { amount: { $gte: 20 } } },
        {
            $group: {
                _id: null,
                averageExp: { $avg: "$amount" },
                totalExp: { $sum: "$amount" },
                minExp: { $min: "$amount" },
                maxExp: { $max: "$amount" },
                totalRecords: { $sum: 1 },
            },
        },
    ]);

    const incomeStats = await Income.aggregate([
        //filter
        { $match: { amount: { $gte: 20 } } },
        {
            $group: {
                _id: null,
                averageInc: { $avg: "$amount" },
                totalInc: { $sum: "$amount" },
                minInc: { $min: "$amount" },
                maxInc: { $max: "$amount" },
                totalRecords: { $sum: 1 },
            },
        },
    ]);

    // const profit = incomeStats[0].totalInc - expensesStats[0].totalExp;
    res?.json({ expensesStats, incomeStats });
});
module.exports = {
    accountStatsCtrl,
};
