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
    },
    purchased_on: {
        type: Date,
        default: Date.now()
    }
})

mongoose.model('expense', expenseSchema);
