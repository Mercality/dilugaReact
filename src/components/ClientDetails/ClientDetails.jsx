var React = require('react');
var Details = require('./Details.jsx');
var ClientSearch = require('./ClientSearch.jsx');

var Reflux = require('reflux');
var Actions = require('../../reflux/Actions.jsx');
var ClientsStore = require('../../reflux/ClientsStore.jsx');

var PropTypes = React.PropTypes;

var ClientDetails = React.createClass({

    mixins: [Reflux.listenTo(ClientsStore, 'onGetClient')],

    getInitialState: function() {
        return {
            client: {},
        };
    },

    onSubmit: function(e, id) {
        e.preventDefault();
        Actions.getClient(id);
    },

    onGetClient: function(e, client) {
        this.setState({client:client});
    },

    render: function() {
        var details = '',
        ultimo = '';

        if (this.state.client.hasOwnProperty('codigo')) {

            details = <Details client={this.state.client} />;

            ultimo = (
                <div className=" col-md-9 col-sm-8 col-xs-12">
                    <h4 className="text-right"><strong>Ultimo Pedido: </strong><span>{this.state.client.ultimo}</span></h4>
                </div>
            );
        }

        return (
            <div className="componentWrap">
                <h1>Selección de Cliente</h1>
                <div className="row ">

                    <div className="col-md-3 col-sm-4 col-xs-8">

                        <ClientSearch onSubmit={this.onSubmit} />

                    </div>

                    {ultimo}
                </div>

                {details}

            </div>
        );
    }

});

module.exports = ClientDetails;
