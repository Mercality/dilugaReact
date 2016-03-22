var HTTP = require('../services/httpService.js');
var Reflux = require('reflux');
var Actions = require('./Actions.jsx');
var uuid = require('../services/uuid.js');

var PedidosStore = Reflux.createStore({
    listenables: [Actions],
    postPedido: function(body) {

        HTTP.post('/orders', body)
        .then(function(response) {
            this.trigger('postPedido');
        }.bind(this));
    },

    getPedidos: function() {
        HTTP.get('/orders?client=true&detail=true')
        .then(function(json) {
            this.pedidos = json.data;
            this.fireUpdate();
        }.bind(this));
    },

    getEditPedidos: function(id) {
        HTTP.get('/orders/'+id+'?client=true&detail=true')
        .then(function(json) {
            console.log(json);
            var cartProducts = json.detail;
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

            this.trigger('postPedido', true);

        }.bind(this));
    },

    fireUpdate: function() {
        this.trigger('change', this.pedidos);
    },

});

module.exports = PedidosStore;
