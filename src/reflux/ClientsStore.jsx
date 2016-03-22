var HTTP = require('../services/httpService.js');
var Reflux = require('reflux');
var Actions = require('./Actions.jsx');

var ClientsStore = Reflux.createStore({
    listenables: [Actions],

    getClient: function(id) {

        HTTP.get('/clients/'+id)
        .then(function(response) {
            this.client = response.json;
            this.fireUpdate();
        }.bind(this))
        .catch(function(error){
            this.fireUpdate(error);
        }.bind(this));
    },

    fireUpdate: function(error) {
        if (error) {
            this.trigger('change', error);
        } else {
            this.trigger('change', this.client);
        }
    },

});

module.exports = ClientsStore;
