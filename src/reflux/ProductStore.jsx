var HTTP = require('../services/httpService.js');
var Reflux = require('reflux');
var Actions = require('./Actions.jsx');

var ProductStore = Reflux.createStore({
    listenables: [Actions],
    getProducts: function(body) {
        HTTP.get('/products?perPage=500')
        .then(function(json) {
            var products = [];
            json.data.forEach(function(product, index) {
                products[index] = {
                    code: product.code,
                    desc: product.description,
                    price: product.price,
                    stock: product.stock
                }
            });
            this.products = products;
            this.fireUpdate();
        }.bind(this));
    },

    fireUpdate: function() {
        this.trigger('change', this.products);
    },

});

module.exports = ProductStore;
