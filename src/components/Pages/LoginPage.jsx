var React = require('react');
var LoginForm = require('../Forms/LoginForm.jsx');
var History = require('react-router/lib/hashHistory');

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
            errorMsg: '',
            loading:''
        };
    },

    onLogin: function(e, token) {
        this.setState({loading:''});
        if (e === 'success') {
            this.setState({loggedIn: true, errorMsg: ''});
            History.replace({
                pathName: 'historial'
            })
        }
        if (e === 'failed') {
            this.setState({errorMsg: 'Nombre de usuario o contraseña incorrectos.'})
        }

    },

    onSubmit: function(user) {
        this.setState({loading:'block'})
        Actions.login(user);
    },

    render: function() {
        if (this.state.loggedIn) {
            var loged = "The user Successfully logged In with token: ";
        }
        return (
            <div>
                <LoginForm errorMsg={this.state.errorMsg} loading={this.state.loading} loginSubmit={this.onSubmit} />
                {loged}

            </div>

        );
    }

});

module.exports = LoginPage;
