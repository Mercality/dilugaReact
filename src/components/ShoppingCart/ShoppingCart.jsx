var React = require('react');
var CartContents = require('./CartContents.jsx');
var Summary = require('./Summary.jsx');
//This has to be set from outside.
//var products = require('../../mockData.js').cart;
var headers = [
    {title:'Codigo', width:0},
    {title:'Descripción', width:0},
    {title:'Cantidad', width:0},
    {title:'Precio', width:0},
    {title:'Subtotal', width:0},
];


// This has to be set from outside

var ShoppingCart = React.createClass({

    render: function() {
        var customProp = {
            pos: "subtotal",
            name: "input",
            className: "fa fa-times",
            type: "span",
            content: "",
            handleClick: this.props.removeFromCart
        };

        return (
            <div className="componentWrap">
                <h1 style={{marginBottom:30}}>Carrito de Compras</h1>
                <div className="table-responsive">
                    <CartContents cartType='table' headers={headers} customProp={customProp} products={this.props.products} />
                </div>

                <div className="pull-right">
                    <Summary totals={this.props.totals} />
                </div>
                <span className="clearfix"></span>

                <div>
                    <button onClick={this.props.submitCart} className="btn btn-primary">Enviar</button>
                    <button className="btn btn-warning">Reiniciar</button>
                </div>

            </div>
        );
    }

});

module.exports = ShoppingCart;
