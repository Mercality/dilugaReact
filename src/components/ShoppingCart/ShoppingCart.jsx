var React = require('react');
var CartContents = require('./CartContents.jsx');

//This has to be set from outside.
var products = require('../../mockData.js').cart;

var headers = [
    'Codigo',
    'Descripción',
    'Cantidad',
    'Precio',
    'Subtotal',
];

var customProp = {
    pos: "subtotal",
    name: "input",
    className: "fa fa-times",
    type: "span",
    content: "",
};
// This has to be set from outside

var ShoppingCart = React.createClass({

    render: function() {

        return (
            <div className="componentWrap">
                <h1 style={{marginBottom:30}}>Carrito de Compras</h1>
                <CartContents cartType='table' headers={headers} customProp={customProp} products={products} />
            </div>
        );
    }

});

module.exports = ShoppingCart;
