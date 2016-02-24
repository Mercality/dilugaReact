var React = require('react');

//props.product = {code: String, desc: String, stock: Integer, price: Decimal}
var ProductRow = React.createClass({

    render: function() {
        return (
            <tr>
                <td>{this.props.product.code}</td>
                <td>{this.props.product.desc}</td>
                <td className="text-center">{this.props.product.stock}</td>
                <td className="text-center"><input className="productQty" type="Number" /></td>
                <td className="productPrice">{this.props.product.price}</td>
                <td className="text-center"><span className="fa fa-cart-plus"></span></td>
            </tr>
        );
    }

});

module.exports = ProductRow;
