var React = require('react');
var PropTypes = React.PropTypes;

var Pedido = React.createClass({
    onClick: function(e) {
        $(e.target.parentNode.nextSibling).removeClass('hidden');
    },
    render: function() {
        return (
            <tr className="pedido" id={'pedido'+this.props.code} onClick={this.onClick}>
                <td>{this.props.pedido.id}</td><td>{this.props.pedido.cliente}</td><td>{this.props.pedido.fecha}</td><td>{this.props.pedido.total}</td>
            </tr>
        );
    }

});

module.exports = Pedido;
