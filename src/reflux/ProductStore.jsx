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
            console.log(products);
            this.products = products;
            this.fireUpdate();
        }.bind(this));
    },

    getAllProducts: function() {

        HTTP.get('/products?perPage=1000')
        .then(function(json) {
            var products = [];
            json.data.forEach(function(product, index) {
                products[index] = {
                    code: product.code,
                    desc: product.description,
                    price: product.price,
                    stock: product.stock,
                    department: product.department_id
                }
            });
            
 
            this.trigger('change', products);
        }.bind(this));
    },

    getDepartments: function() {
        HTTP.get('/departments')
        .then(function(json) {
            this.trigger('getDepartments', json);
        }.bind(this))
    },

    fireUpdate: function() {
        this.trigger('change', this.products);
    },

});

module.exports = ProductStore;
