const mongoose = require('mongoose');

const expenseSchema = new mongoose.Schema({
    item: {
        type: String,
        required: true
    },
    cost: {
        type: Number,
        required: true
    },
    description: {
        type: String,
        required: false
    },
    type: {
        type: String,
        default: "expense"
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    }
}, { timestamps: true })

const Expenses = mongoose.model('expense', expenseSchema);

module.exports = Expenses;
