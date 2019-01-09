const express = require('express');
const authRouter = require('./routes/auth-routes');
const passportSetUp = require('./config/passport-setup');
const mongoose = require('mongoose');
const keys = require('./config/keys');

const app = express();

mongoose.connect(keys.mongoDB.dbURL, () => {
    console.log('you\'re now connected with db in mlab')
});

//set a view engine
app.set('view engine', 'ejs');

// user the routes middleware
app.use('/auth', authRouter);

// set the home route
app.get('/', (req, res) => {
    res.render('home', {title: 'OAth app'});
})

//set the listen port
app.listen(3000, () => {
    console.log('you\'re now listening in port 3000');
})