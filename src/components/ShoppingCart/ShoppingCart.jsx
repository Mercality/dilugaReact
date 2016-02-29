var React = require('react');
var CartContents = require('./CartContents.jsx');
var Summary = require('./Summary.jsx');
//This has to be set from outside.
var products = require('../../mockData.js').cart;
console.log(products);
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
                <div className="table-responsive">
                    <CartContents cartType='table' headers={headers} customProp={customProp} products={products} />
                </div>

                <div className="pull-right">
                    <Summary />
                </div>
                <span className="clearfix"></span>

                <div>
                    <button className="btn btn-primary">Enviar</button>
                    <button className="btn btn-warning">Reiniciar</button>
                </div>

            </div>
        );
    }

});

module.exports = ShoppingCart;
