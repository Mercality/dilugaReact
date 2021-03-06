var React = require('react');
var uuid = require('../../services/uuid.js');
var classie = require('desandro-classie');
var whichAnim = require('../../services/whichAnimation.js');

//props.product = {code: String, desc: String, stock: Integer, price: Decimal}
var ProductRow = React.createClass({
    getInitialState: function() {
        return {
            qty: 0
        };
    },
    qtyChange: function(e) {
        if (e.target.value > 0 && e.target.value <= this.props.product.stock) this.setState({qty:e.target.value});
    },
    onClick: function(e){
        if (this.state.qty > 0 && this.props.product.stock >= this.state.qty) {

            var product = {
                uuid: uuid(),
                code: this.props.product.code,
                desc: this.props.product.desc,
                qty: parseInt(this.state.qty),
                price: parseFloat(this.props.product.price),
                subtotal: Math.round((this.props.product.price*this.state.qty*100),2) / 100
            };
            
            

            var cartBtn = e.target;
            var animation = whichAnim();

            classie.add(cartBtn, 'animated');
            classie.add(cartBtn, 'pulse');
            cartBtn.style.color = '#333';

            cartBtn.addEventListener(animation, function(e) {
                classie.remove(cartBtn, 'pulse');
                cartBtn.style.color = '';
                this.props.addToCart(product);
            }.bind(this));

        } else {

            //Show message indicating that there's no qty set.

        }
    },

    render: function() {
        return (
            <tr>
                <td>{this.props.product.code}</td>
                <td>{this.props.product.desc}</td>
                <td className="text-center">{this.props.product.stock}</td>
                <td className="text-center"><input onChange={this.qtyChange} value={this.state.qty} className="productQty" min="1" type="number" /></td>
                <td className="productPrice">{this.props.product.price}</td>
                <td className="text-center" onClick={this.onClick}><span className="fa fa-cart-plus"></span></td>
            </tr>
        );
    }

});

module.exports = ProductRow;
