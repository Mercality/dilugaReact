var React = require('react');
var Details = require('./Details.jsx');
var ClientSearch = require('./ClientSearch.jsx');
var dateFormat = require('../../services/dateFormat.js');

var Reflux = require('reflux');
var Actions = require('../../reflux/Actions.jsx');
var ClientsStore = require('../../reflux/ClientsStore.jsx');
var PedidosStore = require('../../reflux/PedidosStore.jsx');

var ClientDetails = React.createClass({

    mixins: [
        Reflux.listenTo(ClientsStore, 'onGetClient'),
        Reflux.listenTo(PedidosStore, 'onPostPedido'),
    ],

    getInitialState: function() {
        return {
            errorMessage: '',
            disableInput: false,
        };
    },


    componentWillReceiveProps: function(nextProps) {

    },

    onPostPedido: function(e, msg) {
        this.setState({disableInput: false});
    },

    onSubmit: function(e, id) {
        e.preventDefault();
        Actions.getClient(id);
    },

    clickEdit: function(e) {
        this.setState({disableInput: false});
        this.props.clientSelected(false)
    },

    onGetClient: function(e, client) {
        //Means there as an error on the request
        if (client.codigo === undefined) {
            this.setState({client:{}, errorMessage:'Cliente no existe o no pertenece al actual vendedor.'});

        //A client was successfully retrieved.
        } else {
            this.setState({client:client, errorMessage:'', disableInput:true});
        }

        client.codigo !== undefined
        ? this.props.clientSelected(client)
        : this.props.clientSelected(false)

    },

    render: function() {
        var details = '',
        ultimo = '';

        if (this.props.client.hasOwnProperty('codigo')) {

            details = <Details client={this.props.client} />;

            ultimo = (
                <div className=" col-md-9 col-sm-8 col-xs-12">
                    <h4 className="text-right"><strong>Ultimo Pedido: </strong><span>{dateFormat.human(this.props.client.ultimo)}</span></h4>
                </div>
            );
        }

        return (
            <div className="componentWrap">
                <h1>Selección de Cliente</h1>
                <div className="row ">

                    <div className="col-md-3 col-sm-4 col-xs-8">

                        <ClientSearch onSubmit={this.onSubmit}
                            editing={this.props.client.codigo}
                            errorMessage={this.state.errorMessage}
                            disable={this.state.disableInput}
                            clickEdit={this.clickEdit} />

                        <div className="checkbox">
                            <label>
                                <input type="checkbox" 
                                disabled={this.props.disabled}
                                checked={this.state.pAceite}
                                onChange={this.props.changepAceite} /> ¿Pedido de Aceite?
                            </label>
                        </div>
                    </div>

                    {ultimo}
                </div>

                {details}

            </div>
        );
    }

});

module.exports = ClientDetails;
