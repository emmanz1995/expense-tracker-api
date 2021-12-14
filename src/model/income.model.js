const mongoose = require('mongoose');
const { Schema } = mongoose;

const incomeSchema = new Schema ({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    type: {
        type: String,
        default: 'income'
    },
    amount: {
        type: Number,
        required: true
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    }
}, { timestamps: true });

const IncomeModel = mongoose.model('income', incomeSchema)
module.exports = IncomeModel;
