var React = require('react');
var History = require('react-router/lib/hashHistory');

var Messages = React.createClass({
    onClick: function(e) {
        History.goBack();    
    },
    render: function() {

        return (
            <div className="componentWrap">
                <h3>Estado de la Operación: <small>{this.props.location.query.status}</small></h3>
                <h4>Mensaje: <small>{this.props.location.query.message}</small></h4>
                <a href="" onClick={this.onClick}>Regresar...</a>
            </div>
        );
    }

});

module.exports = Messages;
