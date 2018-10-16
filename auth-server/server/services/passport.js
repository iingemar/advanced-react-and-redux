const passport = require('passport');
const User = require('../models/user');
const config = require('../config');
const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;

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
