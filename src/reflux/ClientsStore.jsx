var HTTP = require('../services/httpService.js');
var Reflux = require('reflux');
var Actions = require('./Actions.jsx');

var ClientsStore = Reflux.createStore({
    listenables: [Actions],
    getClient: function(id) {

        HTTP.get('/clientes/'+id)
        .then(function(json) {
            this.client = json;
            this.fireUpdate();
        }.bind(this));
    },

    fireUpdate: function() {
        this.trigger('change', this.client);
    },

});

module.exports = ClientsStore;
