const mongoose = require('mongoose');
const mongoosePagination = require('mongoose-paginate-v2');
const { Schema } = mongoose;

const expenseSchema = new Schema({
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
        default: 'expense'
    },
    amount: {
        type: Number,
        required: true
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'UserModel',
        required: true
    }
},
    {
        toJSON: {
            virtuals: true
        },
        toObject: {
            virtuals: true
        },
        timestamps: true,
    }
);

expenseSchema.plugin(mongoosePagination);

const Expenses = mongoose.model('expense', expenseSchema);

module.exports = Expenses;
