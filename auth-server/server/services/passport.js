const passport = require('passport');
const User = require('../models/user');
const config = require('../config');
const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;
const LocalStrategy = require('passport-local');

// Create local strategy. Tell LocalStrategy to examine request body
// It will expect username and password.
// So, we will need to tell it that userName is actually an email.
const options = { usernameField: 'email'};
const localLogin = new LocalStrategy(options, function(email, password, done) {
    // Verify this email and password, call done with the user
    User.findOne({ email: email}, function(err, user) {
        if (err) { return done(err); }
        // User not found
        if (!user) { return done(null, false)};

        // Compare passwords
        user.comparePassword(password, function(err, isMatch) {
            if (err) { return done(err); };

            if (!isMatch) { return done(null, false); }

            return done(null, user);
        });
    });
    // otherwise call done with false.
});

// Setup options for jwt strategy
const jwtOptions = {
    jwtFromRequest: ExtractJwt.fromHeader('authorization'),
    secretOrKey: config.secret
};

// create jwt strategy
const jwtLogin = new JwtStrategy(jwtOptions, function(payload, done) {
    // payload is the decoded jwt token

    // see if the user id in the payload exists in database
    User.findById(payload.sub, function(err, user) {
        if (err) { return done(err, false); }
        // found user
        if (user) {
            done(null, user);
        } else {
            // otherwise call done without a user object.
            done(null, false);
        }
    });
});

// Tell passport to use this strategy
passport.use(jwtLogin);

passport.use(localLogin);
