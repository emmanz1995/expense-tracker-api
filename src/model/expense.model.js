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
    category: String,
    image: String,
    description: {
        type: String,
        required: false
    }
}, { timestamps: true })

mongoose.model('expense', expenseSchema);
