const mongoose = require('mongoose');
const mongoosePagination = require('mongoose-paginate-v2');

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
        ref: 'UserModel',
        required: true
    }
},
    {
        timestamps: true
    },
    {
        toJSON: {
            virtuals: true
        }
    },
    {
        toObject: {
            virtuals: true
        }
    }
    );

expenseSchema.plugin(mongoosePagination);

const Expenses = mongoose.model('expense', expenseSchema);

module.exports = Expenses;
