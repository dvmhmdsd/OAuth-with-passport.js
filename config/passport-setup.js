const passport = require('passport');
const googleStrategy = require('passport-google-oauth20');
const keys = require('./keys');

passport.use(
    new googleStrategy({
        callbackURL: '/auth/google/redirect',
        clientID: keys.google.clientID,
        clientSecret: keys.google.clientSecret
    }, () => {
        console.log('the callback function fired');
    })
)