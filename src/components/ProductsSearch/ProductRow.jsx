var React = require('react');
var uuid = require('../../services/uuid.js');

//props.product = {code: String, desc: String, stock: Integer, price: Decimal}
var ProductRow = React.createClass({
    getInitialState: function() {
        return {
            qty: 0
        };
    },
    qtyChange: function(e) {
        if (e.target.value > 0) this.setState({qty:e.target.value});
    },
    onClick: function(e){
        if (this.state.qty > 0) {
            var product = {
                uuid: uuid(),
                code: this.props.product.code,
                desc: this.props.product.desc,
                qty: this.state.qty,
                price: this.props.product.price,
                subtotal: this.props.product.price*this.state.qty
            };

            this.props.addToCart(product);
        }
    },

    render: function() {
        return (
            <tr>
                <td>{this.props.product.code}</td>
                <td>{this.props.product.desc}</td>
                <td className="text-center">{this.props.product.stock}</td>
                <td className="text-center"><input onChange={this.qtyChange} value={this.state.qty} className="productQty" type="Number" /></td>
                <td className="productPrice">{this.props.product.price}</td>
                <td className="text-center" onClick={this.onClick}><span className="fa fa-cart-plus"></span></td>
            </tr>
        );
    }

});

module.exports = ProductRow;
