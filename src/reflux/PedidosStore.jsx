var HTTP = require('../services/httpService.js');
var Reflux = require('reflux');
var Actions = require('./Actions.jsx');
var uuid = require('../services/uuid.js');

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

    getEditPedidos: function(id) {
        HTTP.get('/pedido/'+id)
        .then(HTTP.checkStatus)
        .then(function(json) {
            Actions.getClient(json.codigo_cliente);
            var cartProducts = json.detallePedido;
            cartProducts.map(function(product) {
                product.subtotal = Math.round(product.price*product.qty*100)/100;
                product.uuid = uuid();
            });
            this.trigger('editPedido', cartProducts);

        }.bind(this));
    },

    putPedido: function(body) {
        HTTP.put('/pedido/'+body.id, body)
        .then(function(json) {
            console.log(json);
            this.trigger('postPedido', true);

        }.bind(this));
    },

    fireUpdate: function() {
        this.trigger('change', this.pedidos);
    },

});

module.exports = PedidosStore;
