var React = require('react');
var PropTypes = React.PropTypes;
var NavBar = require('./NavBar/Navbar.jsx');

var HistorialPedidos = require('../HistorialPedidos/HistorialPedidos.jsx');
var ProductsSearch = require('../ProductsSearch/ProductsSearch.jsx');
var LoginForm = require('../Forms/LoginForm.jsx');
var ShoppingCart = require('../ShoppingCart/ShoppingCart.jsx');


var AdminPanel = React.createClass({

    render: function() {
        return (
            <div id="wrapper">
                <NavBar />
                <div id="page-wrapper">

                    <div className="container-fluid">


                        <div className="row">
                            <div className="col-lg-12">
                                <h1 className="page-header">
                                    Dashboard <small>Statistics Overview</small>
                            </h1>
                            <ol className="breadcrumb">
                                <li className="active">
                                    <i className="fa fa-dashboard"></i> Dashboard
                                    </li>
                                </ol>
                            </div>
                        </div>
                        <div className="col-sm-12">
                            <ProductsSearch />

                        </div>

                        <div className="col-sm-12">
                            <ShoppingCart />

                        </div>

                    </div>


                </div>
            </div>

        );
    }

});

module.exports = AdminPanel;
