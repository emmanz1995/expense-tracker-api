const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const dbConnection = require('./config/dbConnection');
const { errorHandler, notFound } = require('./middleware/errorMiddleware');
const userRoute = require('./routes/user');
const incomeRoute = require('./routes/income');

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
app.use('/api/user/', userRoute);
app.use('/api/income', incomeRoute);

app.get('/', (req, res) => {
    res.send('<h1>Welcome to the Expense Tracker API!</h1>');
});

app.use(notFound);
app.use(errorHandler);

app.listen(PORT, () => {
    console.log(`Api running at PORT - ${PORT}`);
})
