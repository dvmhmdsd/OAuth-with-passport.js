const passport = require('passport');
const googleStrategy = require('passport-google-oauth20');
const keys = require('./keys');
const User = require('../models/user-model');

passport.serializeUser((user, done) => {
    done(null, user.id);
});

passport.deserializeUser((id, done) => {
    User.findById(id).then((user) => {
        done(null, user);
    });
});

passport.use(
    new googleStrategy({
        callbackURL: '/auth/google/redirect',
        clientID: keys.google.clientID,
        clientSecret: keys.google.clientSecret
    }, (accessToken, refreshToken, profile, done) => {
        console.log('the callback function fired');
        User.findOne({googleID: profile.id}).then((user) => {
            if(user) {
                console.log('the current user: ' + user);
                done(null, user);
            } else {
                new User({
                    username: profile.displayName,
                    googleID: profile.id
                }).save().then((newUser) => {
                    console.log(newUser);
                    done(null, newUser);
                })
            }
        })
    })
)