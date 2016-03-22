var Reflux = require('reflux');

var Actions = Reflux.createActions([
    'getProducts',
    'getClient',
    'postPedido',
    'getPedidos',
    'getEditPedidos',

    //Authentication
    'login',
    'auth_check',
]);

module.exports = Actions;
