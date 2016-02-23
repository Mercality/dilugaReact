var React = require('react');
var PropTypes = React.PropTypes;

var ProductoDetalle = React.createClass({

    render: function() {
        return (
            <tr>
                <td contentEditable="true">{this.props.code}</td><td>{this.props.desc}</td><td contentEditable="true">{this.props.qty}</td><td>{this.props.price}</td>
            </tr>
        );
    }

});

module.exports = ProductoDetalle;
