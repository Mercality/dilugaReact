var React = require('react');
var ReactDOM = require('react-dom');
var HistorialPedidos = require('./components/HistorialPedidos/HistorialPedidos.jsx');
var ProductsSearch = require('./components/ProductsSearch/ProductsSearch.jsx');
var LoginForm = require('./components/Forms/LoginForm.jsx');
var ShoppingCart = require('./components/ShoppingCart/ShoppingCart.jsx');

console.log('yes');    
ReactDOM.render(<ShoppingCart />, document.getElementById('reactContainer'));
