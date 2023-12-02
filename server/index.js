const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
const {postRoute} = require('./routes/postRoute');

const app = express();
// Setting-up ENV path
dotenv.config({path: './config.env'});

// const DB = process.env.DB;
const DBLocal = process.env.DBLocal;
const PORT = process.env.PORT;

// Controls the maximum request body size.
app.use(bodyParser.json({limit: '30mb', extended: true}));
app.use(bodyParser.urlencoded({limit: '30mb', extended: true}));

// Cors Middleware
app.use(cors());

// Home Route
app.get('/', function (req, res) {
    return res.json({
        status: 'success',
        message: 'Welcome',
    });
});

// Routes Middleware
app.use('/posts', postRoute);

console.log('Connecting with DB...');

mongoose
    .connect(DBLocal)
    .then(function () {
        app.listen(PORT, function () {
            console.log('DB Connection Successfull.');
            console.log(`SERVER HOME URL : http://127.0.0.1:${PORT}/`);
        });
    })
    .catch(function () {
        console.log('ERROR : DB Connection Error');
    });
