var React = require('react');
var classie = require('desandro-classie');

var Pedido = React.createClass({
    onClick: function(e) {
        classie.toggle(e.target.parentNode.nextSibling.firstChild,'hidden');
    },
    render: function() {
        return (
            <tr className="pedido" id={'pedido'+this.props.product_code} onClick={this.onClick}>
                <td>{this.props.pedido.id}</td><td>{this.props.pedido.client.name}</td><td>{this.props.pedido.date}</td><td className="productPrice">{this.props.pedido.total}</td>
            </tr>
        );
    }

});

module.exports = Pedido;
