var React = require('react');
var ReactDOM = require('react-dom');
var HistorialPedidos = require('./components/HistorialPedidos/HistorialPedidos.jsx');
var ProductsSearch = require('./components/ProductsSearch/ProductsSearch.jsx');
var LoginForm = require('./components/Forms/LoginForm.jsx');
var ShoppingCart = require('./components/ShoppingCart/ShoppingCart.jsx');
var Layout = require('./components/AdminPanel/Layout.jsx');
var Routes = require('./Routes.jsx');

ReactDOM.render(Routes, document.getElementById('reactContainer'));
