var React = require('react');
var History = require('react-router/lib/hashHistory');

var Messages = React.createClass({
    onClick: function(e) {
        History.goBack();
    },
    render: function() {
        var list = [];
        if (this.props.location.query.messageList) {
            list = JSON.parse(decodeURIComponent(this.props.location.query.messageList));
        }

        var elems = [];
        Object.keys(list).forEach(function(key, index) {
            elems[index] = <li key={key}>{key+': '+list[key]}</li>
        })
        return (
            <div className="componentWrap">
                <h3>Estado de la Operación: <small>{this.props.location.query.status}</small></h3>
                <h4>Mensaje: <small>{this.props.location.query.message}</small></h4>
                <h4>Detalle:</h4>
                <ul>{elems}</ul>
                <a href="" onClick={this.onClick}>Regresar...</a>
            </div>
        );
    }

});

module.exports = Messages;
