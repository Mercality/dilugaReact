var HTTP = require('../services/httpService.js');
var Reflux = require('reflux');
var Actions = require('./Actions.jsx');
var uuid = require('../services/uuid.js');

var PedidosStore = Reflux.createStore({
    listenables: [Actions],
    postPedido: function(client, cart, totals) {

        var fcart = [];
        cart.forEach(function(product, index) {
            fcart[index] = {
                product_code: product.code,
                product_desc: product.desc,
                qty: parseFloat(product.qty),
                price: parseFloat(product.price),
            }
        });

        var date = new Date(Date.now());
        var body = {
            date: date.getFullYear() + '-' + date.getMonth() + '-' + date.getDay(),
            subtotal: totals.base,
            tax: totals.tax,
            total: totals.base + totals.tax,
            salesman_id: 2, /////////!!!!!!!!!!! CHANGE THIS TO ACTUAL SALESMAN !!!!!!!!!!//////////////
            code: client.codigo,
            detail: fcart,
        };

        console.log(body);


        HTTP.post('/orders', body)
        .then(function(response) {
            if (response.status !== 201)
                this.trigger('postPedido', 'error');
            else
                this.trigger('postPedido', 'success');
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
            var cartProducts = [];
            json.detail.forEach(function(product, index) {
                cartProducts[index] = {
                    code: product.product_code,
                    desc: product.product_desc,
                    qty: product.qty,
                    price: product.price,
                    subtotal: Math.round(product.price*product.qty*100)/100,
                    uuid: uuid(),
                }
            });
            var client = {
                codigo: json.client.code,
                name: json.client.name,
                rif: json.client.business_type+ json.client.business_id,
                phone: json.client.phone,
                email: json.client.email,
                addr: json.client.address,
            }


            this.trigger('editPedido', cartProducts, client);

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
