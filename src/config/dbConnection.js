const mongoose = require('mongoose');
const { DB_URI } = require('./keys');

const dbConnection = async () => {
    try {
        await mongoose.connect(`${DB_URI}`, {
            useUnifiedTopology: true,
            useNewUrlParser: true
        })
        console.log('MongoDB connection - SUCCESS');
    } catch(err) {
        console.log(`MongoDB connection - FAILED: ${err.message}`);
        process.exit(1);
    }
}

module.exports = dbConnection;
