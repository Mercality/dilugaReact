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
        Reflux.listenTo(PedidosStore, 'onPostPedido')
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
    onPostPedido: function(e, msg) {
        this.setState({
            cartProducts: [],
            totals: {
                base: 0,
                tax: 0
            },
            clientSelected: false
        });
    },
    onChange: function(event, data) {
        this.setState({productList: data});
    },


    addToCart: function(product) {
        console.log('yes');
        var actCart = this.state.cartProducts;

        actCart.push(product);
        this.setState({cartProducts: actCart});
        this.updateSum(actCart);
    },

    removeFromCart: function(uuid) {
        var cartProducts = this.state.cartProducts;

        var newCart = cartProducts.filter(function(product){
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
        if (typeof this.state.clientSelected === 'object' && this.state.cartProducts.length > 0) {
            var client = this.state.clientSelected;
            var date = new Date(Date.now());
            var body = {
                id: '',
                cliente: client.name,
                fecha: date.getDay() + ' / ' + date.getMonth() + ' / ' + date.getFullYear(),
                total: this.state.totals.base,
                detallePedido: this.state.cartProducts
            }
            Actions.postPedido(body);
        } else {

            //!!!!!!Show message indicating that the request can't be done.!!!!!!!!

        }

    },

    resetCart: function(e) {
        this.setState({cartProducts:[], totals:{base: 0, tax: 0}})
    },

    clientSelected: function(selected) {
        this.setState({clientSelected: selected});
    },

    render: function() {

        var productsAndCart = false;
        if (typeof this.state.clientSelected === 'object') {
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
