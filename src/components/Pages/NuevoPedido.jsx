var React = require('react');
var ClientDetails = require('../ClientDetails/ClientDetails.jsx');
var ProductSearch = require('../ProductsSearch/ProductsSearch.jsx');
var ShoppingCart = require('../ShoppingCart/ShoppingCart.jsx');

var Reflux = require('reflux');
var Actions = require('../../reflux/Actions.jsx');
var ProductStore = require('../../reflux/ProductStore.jsx');
var PedidosStore = require('../../reflux/PedidosStore.jsx');

var NuevoPedido = React.createClass({
    mixins: [
        Reflux.listenTo(ProductStore, 'onChange'),
        Reflux.listenTo(PedidosStore, 'newPedido')
    ],

    getInitialState: function() {
        return {
            cartProducts:[],
            totals: {
                base: 0,
                tax: 0,
            },
            productList: [],
            clientSelected:false,
        };
    },

    componentWillMount: function() {
        Actions.getProducts();
    },

    componentDidMount: function() {

    },

    onChange: function(event, data) {
        this.setState({productList: data});
    },


    addToCart: function(product) {
        var actCart = this.state.cartProducts;

        actCart.push(product);
        this.setState({cartProducts: actCart});
        this.updateSum(actCart);
    },

    removeFromCart: function(uuid) {
        cartProducts = this.state.cartProducts;

        newCart = cartProducts.filter(function(product){
            return product['uuid'] !== uuid;
        });

        this.setState({cartProducts: newCart});
        this.updateSum(newCart);
    },

    updateSum: function(cart) {
        var totals = {base:0, tax: 0};

        for (var i = 0; i <= cart.length-1; i++) {
            totals.base = totals.base + cart[i].subtotal;
        }

        totals.tax = Math.round((totals.base*12/100),2);
        this.setState({totals:totals});
    },

    submitCart: function(e) {
        var body = {
            id: 10,
            cliente: 'ramon',
            fecha: Date.now(),
            total: this.state.totals.base,
            detallePedido: this.state.cartProducts
        }
        Actions.postPedido(body);
    },

    resetCart: function(e) {
        this.setState({cartProducts:[], totals:{base: 0, tax: 0}})
    },

    clientSelected: function(selected) {
        this.setState({clientSelected: selected});
    },

    render: function() {

        var productsAndCart = false;
        if (this.state.clientSelected) {
            productsAndCart = (
                <div className="row">
                    <div className="col-sm-12 animated zoomIn">

                        <ProductSearch addToCart={this.addToCart}
                             products={this.state.productList} />

                    </div>
                    <div className="col-sm-12 animated zoomIn">

                        <ShoppingCart products={this.state.cartProducts}
                            removeFromCart={this.removeFromCart}
                            totals={this.state.totals}
                            submitCart={this.submitCart}
                            resetCart={this.resetCart} />

                    </div>
                </div>
            );
        }

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
                    <ClientDetails clientSelected={this.clientSelected}/>
                </div>
            </div>

                {productsAndCart}

            </div>
        );
    }

});

module.exports = NuevoPedido;
