var React = require('react');
var Router = require('react-router');
var AuthStore = require('./reflux/AuthStore.jsx');

var LoginRequired = React.createClass({
    statics: {
        willTransitionTo: function (transition, params, query, callback) {
            console.log(AuthStore.auth_check());
            if(!AuthStore.auth_check()){
                // go over to login page
                transition.redirect('/login', null, { redirect: transition.path });
            }
            callback();
        }
    },

    render: function() {
        return (
            <Router.RouteHandler/>
        );
    }
});

module.exports = LoginRequired;
