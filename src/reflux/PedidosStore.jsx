var HTTP = require('../services/httpService.js');
var Reflux = require('reflux');
var Actions = require('./Actions.jsx');

var PedidosStore = Reflux.createStore({
    listenables: [Actions],
    postPedido: function(body) {

        HTTP.post('/pedidos', body)
        .then(function(response) {
            console.log(response);
            
        }.bind(this));
    },

    fireUpdate: function() {
        this.trigger('change');
    },

});

module.exports = PedidosStore;
