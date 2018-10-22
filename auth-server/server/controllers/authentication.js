const jwt = require('jwt-simple');
const User = require('../models/user');
const config = require('../config');

function tokenForUser(user) {
    // Sub is the subject of the token
    // Who is this token for?
    const timestamp = new Date().getTime();
    // iat = issued at time
    return jwt.encode({
        sub: user.id,
        iat: timestamp
    }, config.secret);
}

exports.signin = function(req, res, next) {
    // User has already had their email and psw authd
    // We just need to give them a token.
    const token = tokenForUser(req.user);
    res.send({ token: token });
};

exports.signup = function(req, res, next) {
    const email = req.body.email;
    const password = req.body.password;

    if (!email || !password) {
        return res.status(422).send({ error: 'You must provide email/password'});
    }

    // See if user with given email exists
    User.findOne({ email: email }, function(err, existing_user) {
        if (err) {
            return next(err);
        }

        // If exists, return error.
        if (existing_user) {
            // Unprocessable entity
            return res.status(422).send({ error: 'Email exists'});
        }

        // If not, create and save user data
        const user = new User({
            email: email,
            password: password
        });

        // Note! Must save it.
        user.save(function(err) {
            if (err) {
                return next(err);
            }

            // Respond to request
            res.json({ token: tokenForUser(user) });
        });
    });
};
