const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const user = require('./Routes/User.routes');
const app = express();
let port = 1234;

//==========DATABASE CONNECTION==========
const DB_URL =  'mongodb://localhost:27017/app_db';
mongoose.connect(DB_URL);
mongoose.Promise = global.Promise;

let db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error: '));




//==========ROUTES==========
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}))
app.use('/users', user);

app.listen(port, () => {
    console.log("Server Live on port: " + port);
})

