const mongoose = require('mongoose');
const { DB_URI } = require('../config/key');

const dbConnection = async () => {
    try {
        await mongoose.connect(`${DB_URI}`)
        console.log('MongoDB connection - SUCCESS');
    } catch(err) {
        console.log(`MongoDB connection - FAILED: ${e}`);
        process.exit(1);
    }
}

module.exports = dbConnection;
