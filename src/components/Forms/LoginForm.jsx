var React = require('react');
var validator = require('validator/lib/isEmail');
var toggleErrors = require('../../services/toggleErrors');

var LoginForm = React.createClass({

    //Initialize the fields state and their validity.
    getInitialState: function() {
        return {
            email: '',
            emailValid: false,
            password:'',
            rememberMe: false,
            users: [] //REplace with web service conection
        };
    },

    //Validate and set Email Address
    changeEmail: function(e) {
        var formControl = e.target.parentNode;

        this.validateEmail(e.target.value, formControl);

        this.setState({email:e.target.value});
    },

    //Set password state.
    changePassword: function(e) {
        this.setState({password:e.target.value});
    },

    //Set "Remember Me" state.
    rememberChange: function(e) {
        this.setState({rememberMe: e.target.checked})
    },

    //Prevent default submission, validate fields and trigger desired action.
    onSubmit: function(e) {
        e.preventDefault();
        var user = {
            username: this.state.email,
            password: this.state.password,
        }
        this.props.loginSubmit(user);
    },

    //Validate email address and change class to show user there's and error.
    validateEmail: function(email, formControl) {
        validator(email)
        ? this.setState({emailValid: true})
        : this.setState({emailValid: false});

        this.state.emailValid
        ? toggleErrors(formControl, true)
        : toggleErrors(formControl, false);
    },

    render: function() {
        return (
            <form className="form-signin">
                <h2 className="form-signin-heading">Inicie Sesión</h2>

                <div className="form-group">
                    <label htmlFor="inputEmail" className="sr-only">Dirección de Email</label>
                    <input onBlur={this.changeEmail} onChange={this.changeEmail} value={this.state.email} type="email" id="inputEmail" className="form-control" placeholder="Correo Electrónico" required autofocus />
                </div>

                <div className="from-group">
                    <label htmlFor="inputPassword" className="sr-only">Password</label>
                    <input onChange={this.changePassword} value={this.state.password} type="password" id="inputPassword" className="form-control" placeholder="Password" required />
                </div>

                <div className="checkbox">
                    <label>
                        <input onChange={this.rememberChange} type="checkbox" checked={this.state.rememberMe} value={this.state.rememberMe} /> Recordarme
                    </label>
                </div>

                <button className="btn btn-lg btn-primary btn-block" onClick={this.onSubmit} type="submit">Iniciar Sesión</button>
            </form>
        );
    }

});

module.exports = LoginForm;
