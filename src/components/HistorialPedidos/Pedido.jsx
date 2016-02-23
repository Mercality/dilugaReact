var React = require('react');
var PropTypes = React.PropTypes;
var classie = require('desandro-classie');

var Pedido = React.createClass({
    onClick: function(e) {
        classie.toggle(e.target.parentNode.nextSibling.firstChild,'hidden');
    },
    render: function() {
        return (
            <tr className="pedido" id={'pedido'+this.props.code} onClick={this.onClick}>
                <td>{this.props.pedido.id}</td><td>{this.props.pedido.cliente}</td><td>{this.props.pedido.fecha}</td><td className="productPrice">{this.props.pedido.total}</td>
            </tr>
        );
    }

});

module.exports = Pedido;
