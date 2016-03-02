var React = require('react');
var PropTypes = React.PropTypes;
var ProductSearch = require('../ProductsSearch/ProductsSearch.jsx');
var ShoppingCart = require('../ShoppingCart/ShoppingCart.jsx');
var NuevoPedido = React.createClass({

    render: function() {
        return (
            <div>
            <div className="row">
                <div className="col-lg-12">
                    <h1 className="page-header">
                        Nuevo Pedido <small>Elaborar Nuevo Pedido</small>
                </h1>
                <ol className="breadcrumb">
                    <li className="active">
                        <i className="fa fa-dashboard"></i> Nuevo Pedido
                        </li>
                    </ol>
                </div>
            </div>
            <div className="row">
                <div className="col-sm-12">
                    <ProductSearch />
                </div>
                <div className="col-sm-12">
                    <ShoppingCart />
                </div>
            </div>
            </div>
        );
    }

});

module.exports = NuevoPedido;
