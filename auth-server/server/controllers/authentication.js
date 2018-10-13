const User = require('../models/user');

exports.signup = function(req, res, next) {
    const email = req.body.email;
    const password = req.body.password;

    // res.send({ success: true });

    // See if user with given email exists
    User.findOne({ email: email }, function(err, existing_user) {
        if (err) {
            return next(err);
        }

        // If exists, return error.
        if (existing_user) {
            // Unprocessable entity
            return res.status(422).send({ error: 'Email exists.'});
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
            res.json(user);
        });
    });
};