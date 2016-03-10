var HTTP = require('../services/httpService.js');
var Reflux = require('reflux');
var Actions = require('./Actions.jsx');

var ProductStore = Reflux.createStore({
    listenables: [Actions],
    getProducts: function(body) {
        HTTP.get('/productos')
        .then(HTTP.checkStatus)
        .then(function(json) {
            this.products = json;
            this.fireUpdate();
        }.bind(this));
    },

    fireUpdate: function() {
        this.trigger('change', this.products);
    },

});

module.exports = ProductStore;
