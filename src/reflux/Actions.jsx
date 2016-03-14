var Reflux = require('reflux');

var Actions = Reflux.createActions([
    'getProducts',
    'getClient',
    'postPedido',
    'getPedidos',
    'getEditPedidos',
    'putPedido'
]);

module.exports = Actions;
