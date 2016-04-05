var HTTP = require('../services/httpService.js');
var Cookie = require('../services/cookie.js');
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

        HTTP.post('/oauth/access_token', parameters)
        .then(function(json) {
            if (typeof json.access_token === 'string') {
                Cookie.createCookie('access_token', json.access_token, 0.2);
                this.trigger('success');
            } else {
                this.trigger('failed');
            }


        }.bind(this))
        .catch(function(error){
            console.log(error);
        }.bind(this));
    },

    getLoggedUser: function() {
        HTTP.get('/auth/user?salesman=true', this.get_token())
        .then(function(json) {
            this.trigger('getUser', json);
        }.bind(this));
    },

    logout: function() {
        HTTP.get('/auth/apilogout', this.get_token())
        .then(function(json) {
            Cookie.eraseCookie('access_token')
            this.trigger('logout');
        }.bind(this));
    },

    auth_check: function() {

        if (Cookie.readCookie('access_token') !== null) {
            return true;
        } else {
            return false;
        }
    },

    get_token: function() {
        return Cookie.readCookie('access_token');
    },

    fireUpdate: function(error) {

    },

});

module.exports = AuthStore;
