var HTTP = require('../services/httpService.js');
var Reflux = require('reflux');
var Actions = require('./Actions.jsx');

var AuthStore = Reflux.createStore({
    listenables: [Actions],

    login: function(credentials) {
        var parameters = {
            grant_type: 'password',
            client_id: 'f3d259ddd3ed8ff3843839b',
            client_secret: '4c7f6f8fa93d59c45502c0ae8c4a95b',
            username: credentials.username,
            password: credentials.password,
        };

        HTTP.post('/oauth/access_token', parameters, 'http://lubricantes.app')
        .then(HTTP.checkStatus)
        .then(function(json) {
            this.token = json.access_token;
            this.trigger('login', this.token);
        }.bind(this))
        .catch(function(error){
            console.log(error);
        }.bind(this));
    },

    auth_check: function() {
        if (this.token !== undefined) {
            this.trigger('isLogged');
        } else {
            return false;
        }
    },

    fireUpdate: function(error) {

    },

});

module.exports = AuthStore;
