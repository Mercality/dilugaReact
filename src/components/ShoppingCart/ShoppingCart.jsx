var React = require('react');
var CartItem = require('./CartItem.jsx');

var CartInput = require('./CartInput.jsx');


var ShoppingCart = React.createClass({

    render: function() {
        //Headers initialization
        var headers = '';

        //Get items according to product list.
        var items = this.props.products.map(function(product) {
            return <CartItem product={product} itemType={this.props.cartType} />
        }.bind(this));

        //If headers are set, generate the headers line.
        if (typeof this.props.headers === 'object') {
            headers = <CartItem product={this.props.headers} itemType={this.props.cartType} isHeader={true}/>
        }

        //The cart is set to be an html table
        if (this.props.cartType === 'table') {
            return (
                <table className="table">
                    <tbody>
                        {typeof headers === 'object' ? headers: undefined}
                        {items}
                    </tbody>
                </table>
            );
        }

        //The cart is set to be whatever the users want's it to be(Adding custom
        //styles to divs and spans)
        if (this.props.cartType === 'div') {
            return (
                <div className="well">
                    <div>
                        {typeof headers === 'object' ? headers: undefined}
                        {items}
                    </div>
                </div>
            );
        }

        //If nothing is set, it will be a table by default.
        return (
            <table className="table">
                <tbody>
                    {items}
                </tbody>
            </table>
        );

    }

});

module.exports = ShoppingCart;
