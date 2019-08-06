
const controller = require('./controller');
const path = require('path');

module.exports = function(app) {
    app.get('/scores', controller.index);
    app.post('/scores', controller.new);
    app.post('/scores/:Score', controller.test);
    app.get('/scores/:id', controller.findOne);
    app.put('/scores/:id', controller.updateName);
    app.delete('/scores/:id', controller.delete);
}