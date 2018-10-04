// This is how we export in node.js
module.exports = function(app) {

    app.get('/', function(req, res, next) {
        res.send(['adsf', 'dsfasdf']);
    });
};