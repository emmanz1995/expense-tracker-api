const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const dbConnection = require('./config/dbConnection');

const app = express();
const PORT = 5000 || process.env.PORT;

dbConnection();

const corsOptions = {
    origin: '*'
}
app.use(cors(corsOptions));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

require('./model/expense.model');

app.use(express.json());
app.use(require('./routes/expense.routes'));

app.get('/', (req, res) => {
    res.send('<h1>Welcome to the Expense Tracker API!</h1>');
});

app.listen(PORT, () => {
    console.log(`Api running at PORT - ${PORT}`);
})
