var React = require('react');

var Reflux = require('reflux');
var Actions = require('../../reflux/Actions.jsx');
var AuthStore = require('../../reflux/AuthStore.jsx');

var UserProfile = React.createClass({
    mixins: [Reflux.listenTo(AuthStore, 'onGetUser')],
    getInitialState: function() {
        return {
            user:{salesman:{}}
        };
    },

    componentWillMount: function() {
        Actions.getLoggedUser();
        //getUser is called in the navbar on every request so it's not needed to call it here.
    },

    onGetUser: function(e, user) {
        if (e === 'getUser') {
            console.log(user);
            this.setState({user: user});
        }
    },

    render: function() {

        return (
            <div className="componentWrap">
                <h1>Perfil de Usuario</h1>
                <div className="row">
                    <div className="userForm">
                        <form action="">
                            <TextInput name='name'
                                label='Nombre'
                                placeholder='Nombre'
                                disabled={true}
                                value={this.state.user.name} />
                            <TextInput name='email'
                                label='Email'
                                placeholder='Email'
                                disabled={true}
                                value={this.state.user.salesman.email} />
                            <TextInput name='phone'
                                label='Teléfono'
                                placeholder='Teléfono'
                                disabled={true}
                                value={this.state.user.salesman.phone} />
                            <TextInput name='zone'
                                label='Zona'
                                placeholder='Zona'
                                disabled={true}
                                value={this.state.user.salesman.zone_code} />

                            <button type="submit" className="btn btn-primary">Guardar</button>
                            <button type="submit" className="btn btn-default">Cancelar</button>

                        </form>
                    </div>
                </div>
            </div>
        );
    }

});



var TextInput = React.createClass({
    getInitialState: function() {
        return {
            value: this.props.value
        };
    },
    componentWillReceiveProps: function(nextProps) {
        this.setState({value: nextProps.value})
    },
    onChange: function(e) {
        this.setState({value:e.target.value});
    },

    render: function() {

        return (
            <div className="form-group">
                <label htmlFor={this.props.name}>{this.props.label}</label>
                <input onChange={this.onChange}
                    value={this.state.value}
                    type="text"
                    className="form-control"
                    placeholder={this.props.placeholder}
                    disabled={this.props.disabled} />
            </div>
        );
    }

});


module.exports = UserProfile;
