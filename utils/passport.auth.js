const passport = require('passport')
const LocalStrategy  = require('passport-local').Strategy
const User = require('../models/user.model')

passport.use(
    new LocalStrategy({
        usernameField: 'email',
        passwordField: 'password'
    }, async(email, password, done) => {
        try {
            const user = await User.findOne({email});
            // Username/email does not exist
            if(!user){
                return done(null,false, {message: "Username/email not registered"});
            }
            //email exist and now we need to check password
            const isMatch = await user.isValidPassword(password);
            return isMatch
                ? done(null, user)
                : done(null, false, {message: 'Incorrect password'});
        } catch (error) {
            done(error)
        }
    })
);

passport.serializeUser(function(user, done) {
    done(null, user.id);
});

passport.deserializeUser(async function (id, done) {
    try {
        const user = await User.findOne({ _id: id });
        done(null, user);
    } catch (error) {
        done(error);
    }
});

