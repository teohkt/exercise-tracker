const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;
const dbUrl = process.env.DB_URL// || 'mongodb://localhost:27017/exercise'

const exerciseRouter = require('./routes/exercises');
const usersRouter = require('./routes/users');

app.use(cors());
app.use(express.json());

// Setting the routes
app.use('/exercises', exerciseRouter);
app.use('/users', usersRouter);

// Connecting to Database
mongoose.connect(dbUrl, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false
});

const db = mongoose.connection;
// db.on("error", console.error.bind(console, "connection error: "));
db.once("open",() => {
    console.log("Database Connected")
});



app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
})