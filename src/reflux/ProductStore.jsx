    var HTTP = require('../services/httpService.js');
var Reflux = require('reflux');
var Actions = require('./Actions.jsx');

var ProductStore = Reflux.createStore({
    listenables: [Actions],
    getProducts: function(query, lub) {

        HTTP.get('/products?qcode='+query+'&qdesc='+query+'&lubricantes='+lub)
        .then(function(json) {
            var products = [];
            json.forEach(function(product, index) {
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
