const passport = require('passport');
const googleStrategy = require('passport-google-oauth20');
const keys = require('./keys');
const User = require('../models/user-model');

passport.use(
    new googleStrategy({
        callbackURL: '/auth/google/redirect',
        clientID: keys.google.clientID,
        clientSecret: keys.google.clientSecret
    }, (accessToken, refreshToken, profile, done) => {
        console.log('the callback function fired');
        new User({
            username: profile.displayName,
            googleID: profile.id
        }).save().then((newUser) => {
            console.log(newUser);
        })
    })
)