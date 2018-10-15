const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const session = require('express-session');
const cors = require('cors');
const mongoose = require('mongoose');
const errorHandler = require('errorHandler');

mongoose.promise = global.Promise;

const isProduction = process.env.NODE_ENV === 'production';

const app = express();

//Configure ourn napp
app.use(cors());
app.use(require('morgan')('dev'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'build')));
app.use(session({ secret: 'passport-tutorial', cookie: { maxAge: 60000 }, resave: false, saveUninitialized: false }));


if (!isProduction) {
    app.use(errorHandler());
}

//Configure Mongoose
mongoose.connect('mongodb://localhost:27017/app_db');
mongoose.set('debug', true);

require('./models/user.model');
require('./configuration/passport.config');
app.use(require('./routes/index.routes'));




app.get('/', function (req, res) {
    res.send(path.resolve(__dirname, 'public', 'index.html'));
});
app.listen(8000, () => console.log('Server running on http://localhost:8000'));