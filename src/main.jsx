var React = require('react');
var ReactDOM = require('react-dom');
var HistorialPedidos = require('./components/HistorialPedidos/HistorialPedidos.jsx');
var ProductsSearch = require('./components/ProductsSearch/ProductsSearch.jsx');
var LoginForm = require('./components/Forms/LoginForm.jsx');
var ShoppingCart = require('./components/ShoppingCart/ShoppingCart.jsx');

var addProps = require('./services/addProperties.js');
var CartInput = <CartInput className='someClass' inputType='button'  />
var products = require('./mockData.js').cart;

var headers = [
    'Codigo',
    'Descripción',
    'Cantidad',
    'Precio',
    'Subtotal',
];
products = addProps(products, 'subtotal', 'age', CartInput);
console.log(products);
ReactDOM.render(<ShoppingCart cartType='table' headers={headers} products={products} />, document.getElementById('reactContainer'));
