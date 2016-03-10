var HTTP = require('../services/httpService.js');
var Reflux = require('reflux');
var Actions = require('./Actions.jsx');

var PedidosStore = Reflux.createStore({
    listenables: [Actions],
    postPedido: function(body) {

        HTTP.post('/pedidos', body)
        .then(HTTP.checkStatus)
        .then(function(json) {
            console.log(json);
            this.fireUpdate();
        }.bind(this));
    },

    fireUpdate: function() {
        this.trigger('change');
    },

});

module.exports = PedidosStore;
