var HTTP = require('../services/httpService.js');
var Reflux = require('reflux');
var Actions = require('./Actions.jsx');

var PedidosStore = Reflux.createStore({
    listenables: [Actions],
    postPedido: function(body) {

        HTTP.post('/pedidos', body)
        .then(function(response) {
            console.log(response);
            this.trigger('postPedido');
        }.bind(this));
    },

    getPedidos: function() {
        HTTP.get('/pedidos')
        .then(HTTP.checkStatus)
        .then(function(json) {

            this.pedidos = json;
            this.fireUpdate();
        }.bind(this));
    },

    fireUpdate: function() {
        this.trigger('change', this.pedidos);
    },

});

module.exports = PedidosStore;
