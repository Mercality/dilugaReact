var Reflux = require('reflux');

var Actions = Reflux.createActions([
    'getProducts',
    'getClient',
    'postPedido',
    'getPedidos',
    'getEditPedidos',
    'putPedido',

    //Authentication
    'login',
    'auth_check',
    'getToken',
    'getLoggedUser',
    'logout',
]);

module.exports = Actions;
