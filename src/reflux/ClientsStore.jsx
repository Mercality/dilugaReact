var HTTP = require('../services/httpService.js');
var Auth = require('../services/auth.js');
var handler = require('../services/errorHandler.js');
var Reflux = require('reflux');
var Actions = require('./Actions.jsx');

var ClientsStore = Reflux.createStore({
    listenables: [Actions],

    getClient: function(id) {

        HTTP.get('/clients/'+id+'?code=true', Auth.get_token())
        //.then(handler.check)
        .then(this._formatClient.bind(this));
    },

    _formatClient: function(json) {
        var client = {
            codigo:json.code,
            name: json.name,
            rif: json.business_type+json.business_id,
            addr: json.address,
            phone: json.phone,
            email: json.email,
            ultimo: json.last_order
        };

        this.trigger('change', client);
    },

});

module.exports = ClientsStore;
