var React = require('react');
var LoginForm = require('../Forms/LoginForm.jsx');

var Reflux = require('reflux');
var Actions = require('../../reflux/Actions.jsx');
var AuthStore = require('../../reflux/AuthStore.jsx');

var LoginPage = React.createClass({

    mixins: [
        Reflux.listenTo(AuthStore, 'onLogin'),
    ],

    getInitialState: function() {
        return {
            loggedIn: false,
        };
    },

    onLogin: function(e, token) {
        this.setState({loggedIn: true});
    },

    onSubmit: function(user) {
        Actions.login(user);
    },

    render: function() {
        if (this.state.loggedIn) {
            var loged = "The user Successfully logged In with token: ";
        }
        return (
            <div>
                <LoginForm loginSubmit={this.onSubmit} />
                {loged}

            </div>

        );
    }

});

module.exports = LoginPage;
