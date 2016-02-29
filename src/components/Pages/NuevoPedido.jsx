var React = require('react');
var PropTypes = React.PropTypes;
var ProductSearch = require('../ProductsSearch/ProductsSearch.jsx');
var ShoppingCart = require('../ShoppingCart/ShoppingCart.jsx');
var NuevoPedido = React.createClass({

    render: function() {
        return (
            <div className="row">
                <div className="col-sm-12">
                    <ProductSearch />
                </div>
                <div className="col-sm-12">
                    <ShoppingCart />
                </div>
            </div>
        );
    }

});

module.exports = NuevoPedido;
