var React = require('react');
var ReactDOM = require('react-dom');
var HistorialPedidos = require('./components/HistorialPedidos/HistorialPedidos.jsx');
var ProductsSearch = require('./components/ProductsSearch/ProductsSearch.jsx');
var LoginForm = require('./components/Forms/LoginForm.jsx');
var ShoppingCart = require('./components/ShoppingCart/CartContents.jsx');




var products = require('./mockData.js').cart;

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
}



ReactDOM.render(<ShoppingCart cartType='table' headers={headers} customProp={customProp} products={products} />, document.getElementById('reactContainer'));
