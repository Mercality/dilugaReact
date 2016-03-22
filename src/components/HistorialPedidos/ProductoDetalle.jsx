var React = require('react');
var classie = require('desandro-classie');

var ProductoDetalle = React.createClass({
    getInitialState: function() {
        return {
            qty: this.props.qty,
        };
    },

    qtyChange: function(e) {
        this.setState({qty:e.target.value})
    },

    qtyClick: function(e) {
        e.preventDefault();
        classie.toggle(e.target.parentNode, 'hidden');
        classie.toggle(e.target.parentNode.nextSibling, 'hidden');
    },

    saveClick: function(e) {
        //Update Record function()
        classie.toggle(e.target.parentNode, 'hidden');
        classie.toggle(e.target.parentNode.previousSibling, 'hidden');

    },

    render: function() {
        //Table: Product Code - Description - Quantity - Unit Price - Subtotal(qty*price)
        //Qty can be changed to update order
        return (
            <tr className="lineaPedido">
                <td>{this.props.code}</td>
                <td>{this.props.desc}</td>

                {/*Swap Qty with input */}
                <td className="productQty">
                    <span className=""><a href="#" onClick={this.qtyClick}>{this.state.qty}</a></span>
                    <span className="hidden">
                        <input  style={{width:45}} type="number" size="2" value={this.state.qty} onChange={this.qtyChange} />
                        <span style={{fontSize:19, cursor:'pointer'}} onClick={this.saveClick} className="fa fa-floppy-o"></span>
                    </span>
                </td>
                {/*Swap Qty with input */}

                <td className="productPrice">{this.props.price}</td>
                <td className="productPrice">{this.props.price*this.props.qty}</td>
            </tr>
        );
    }

});

module.exports = ProductoDetalle;
