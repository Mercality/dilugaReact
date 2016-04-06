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

    onGetUser: function(e, user) {
        if (e === 'getUser') {
            this.setState({user: user});
        }
    },

    render: function() {
        console.log(this.state.user)
        return (
            <div className="componentWrap">
                <h1>Hola</h1>
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
                                label='phone'
                                placeholder='phone'
                                disabled={true}
                                value={this.state.user.salesman.phone} />
                            <TextInput name='zone'
                                label='Zona'
                                placeholder='Zona'
                                disabled={true}
                                value={this.state.user.salesman.zone} />

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
