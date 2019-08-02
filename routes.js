
const controller = require('./controller');

module.exports = function(app) {
    app.get('/scores', controller.index);
}