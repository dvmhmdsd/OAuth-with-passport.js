const passport = require('passport');
const googleStrategy = require('passport-google-oauth20');

passport.use(
    new googleStrategy({
        clientID: '893086344264-6gll932t5qcuafmglq6m4ntsf03k1htf.apps.googleusercontent.com',
        clientSecret: 'dpBbWaXXzD2FtGyz8WDg5IFR'
    }), () => {

    }
)