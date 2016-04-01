var HTTP = require('../services/httpService.js');
var Reflux = require('reflux');
var Actions = require('./Actions.jsx');
var uuid = require('../services/uuid.js');
var handler = require('../services/errorHandler.js');
var auth = require('./AuthStore.jsx');

var PedidosStore = Reflux.createStore({
    listenables: [Actions],

    /*
    * GET request to the specified URI
    * Triggers the CHANGE event
    *
    */
    getPedidos: function(pageNo) {
        var page = '&perPage=10&page=1';
        if (pageNo) page = '&perPage=10&page='+pageNo;
        HTTP.get('/orders?client=true&detail=true'+page, auth.get_token())
        .then(handler.check)
        .then(trigger.bind(this, event='change'))
        .catch(printException) ;
    },


    /*
    * POST request to the specified URI
    * Formats the body to the API requirements using _formatPedidoBody()
    * Triggers the postedPedido event
    *
    */
    postPedido: function(client, cart, totals) {
        var body = this._formatPedidoBody(cart, totals, client);

        HTTP.post('/orders', body, auth.get_token())
        .then(handler.check)
        .then(trigger.bind(this, event='postedPedido'))
        //.catch(printException);
    },


    /*
    * GET request to the specified URI for retrieving the date to be edited by the user
    * Formats the data for using with the client app via _formatPedidoEditing()
    * Triggers the editPedido event.
    */
    getEditPedidos: function(id) {
        HTTP.get('/orders/'+id+'?client=true&detail=true', auth.get_token())
        .then(handler.check)
        .then(this._formatPedidoEditing)
        //.catch(printException);
    },

    /*
    * PUT request to the specified URI for updating a selected order
    * Formats the body to the API requirements using _formatPedidoBody()
    * Triggers the putPedido event.
    */
    putPedido: function(data) {
        var body = this._formatPedidoBody(data.detallePedido);
            body.id = data.id;

        HTTP.put('/orders/'+body.id, body, auth.get_token())
        .then(handler.check)
        .then(function(json) { this.trigger('putPedido', true) }.bind(this));
    },

    _formatPedidoBody: function(cart, totals = {}, client = {}) {
        var detail = [],
            date = new Date(Date.now()),
            body = {};

        cart.forEach(function(product, index) {
            detail[index] = {
                product_code: product.code,
                product_desc: product.desc,
                qty: parseFloat(product.qty),
                price: parseFloat(product.price),
            }
        });

        return body = {
            date: date.getFullYear() + '-' + date.getMonth() + '-' + date.getDay(),
            subtotal: totals.base || null,
            tax: totals.tax || null,
            total: totals.base + totals.tax || null,
            salesman_id: 2 || null, /////////!!!!!!!!!!! CHANGE THIS TO ACTUAL SALESMAN !!!!!!!!!!//////////////
            code: client.codigo || null,
            detail: detail,
        };
    },

    _formatPedidoEditing: function(json) {
        var order = {cart: [], client: {}};

        json.detail.forEach(function(product, index) {
            order.cart[index] = {
                code: product.product_code,
                desc: product.product_desc,
                qty: product.qty,
                price: product.price,
                subtotal: Math.round(product.price*product.qty*100,2)/100,
                uuid: uuid(),
            }
        });

        order.client = {
            codigo: json.client.code,
            name: json.client.name,
            rif: json.client.business_type+ json.client.business_id,
            phone: json.client.phone,
            email: json.client.email,
            addr: json.client.address,
        }

        this.trigger('editPedido',order.cart, order.client);
    }

});


function trigger(event, json) {
        this.trigger(event, json);
}

function printException(e) {
    console.log(e.message);
}

module.exports = PedidosStore;
