var React = require('react');
var CartItem = require('./CartItem.jsx');
var CartInput = require('./CartInput.jsx');

var addProps = require('../../services/addProperties.js');


var CartContents = React.createClass({

    render: function() {

        //Headers initialization
        var headers = '';

        //Get items according to product list.

        var items = this.props.products.map(function(product, index) {

        //Add custom properties if they were passed in.
        if(typeof this.props.customProp === 'object') {
            var cProp = this.props.customProp;
            product = addProps(product, cProp.pos, cProp.name, <CartInput className={cProp.className} inputType={cProp.type} content={cProp.content} uuid={product['uuid']} handleClick={cProp.handleClick} />);
        }

            return <CartItem key={product.code+index} product={product} itemType={this.props.cartType} />
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

module.exports = CartContents;
