var HTTP = require('../services/httpService.js');
var Reflux = require('reflux');
var Actions = require('./Actions.jsx');

var ClientsStore = Reflux.createStore({
    listenables: [Actions],

    getClient: function(id) {

        HTTP.get('/clients/'+id+'?code=true')
        .then(function(json) {
            console.log(json);
            var client = {
                codigo:json.code,
                name: json.name,
                rif: json.business_type+json.business_id,
                addr: json.address,
                phone: json.phone,
                email: json.email,
                ultimo: json.last_order
            }
            this.client = client;
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
