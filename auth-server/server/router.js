const Authentication = require('./controllers/authentication');

// This is how we export in node.js
module.exports = function(app) {

    app.post('/signup', Authentication.signup);

    app.get('/', function(req, res, next) {
        res.send(['adsf', 'dsfasdf']);
    });
};