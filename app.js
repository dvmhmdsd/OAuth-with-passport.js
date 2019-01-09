const express = require('express');
const authRouter = require('./routes/auth-routes');
const profileRouter = require('./routes/profile-routes');
const passportSetUp = require('./config/passport-setup');
const mongoose = require('mongoose');
const keys = require('./config/keys');
const cookieSession = require('cookie-session');
const passport = require('passport');

const app = express();

mongoose.connect(keys.mongoDB.dbURL,  { useNewUrlParser: true }, () => {
    console.log('you\'re now connected with db in mlab')
});

//set a view engine
app.set('view engine', 'ejs');

// use cookie
app.use(cookieSession({
    maxAge: 24 * 60 * 60 * 1000,
    keys: [keys.session.cookieKey]
}));

// initialize passport
app.use(passport.initialize());
app.use(passport.session());

// user the routes middleware
app.use('/auth', authRouter);
app.use('/profile', profileRouter);

// set the home route
app.get('/', (req, res) => {
    res.render('home', {title: 'OAth app', user: req.user});
})

//set the listen port
app.listen(3000, () => {
    console.log('you\'re now listening in port 3000');
})