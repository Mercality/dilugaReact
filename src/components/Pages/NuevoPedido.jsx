var React = require('react');
var History = require('react-router/lib/hashHistory');
var ClientDetails = require('../ClientDetails/ClientDetails.jsx');
var ProductSearch = require('../ProductsSearch/ProductsSearch.jsx');
var ShoppingCart = require('../ShoppingCart/ShoppingCart.jsx');
var Loading = require('../Loading.jsx');

var Reflux = require('reflux');
var Actions = require('../../reflux/Actions.jsx');
var ProductStore = require('../../reflux/ProductStore.jsx');
var PedidosStore = require('../../reflux/PedidosStore.jsx');
var AuthStore = require('../../reflux/AuthStore.jsx');

var NuevoPedido = React.createClass({
    mixins: [
        Reflux.listenTo(ProductStore, 'onChange'),
        Reflux.listenTo(ProductStore, 'onGetDepartments'),       //GET Product List
        Reflux.listenTo(PedidosStore, 'onPostedPedido'), //Pedido was created
        Reflux.listenTo(PedidosStore, 'onEditPedido'),   //GET Pedido for edition
        Reflux.listenTo(PedidosStore, 'onPutPedido'),
        Reflux.listenTo(AuthStore, 'onGetUser')     //Pedido was edited

    ],

    getInitialState: function() {
        return {
            cartProducts:[],
            totals: {
                base: 0,
                tax: 0,
            },
            clientSelected:false,
            loading:'',
            load: '',
            clientLoading: '',
            pAceite: false,
            user: {salesman: {}},
            productList: [],
            filtered: []
        };
    },

    componentWillMount: function() {
        //Actions.getProducts();
        Actions.getLoggedUser();
        Actions.getDepartments();
        Actions.getAllProducts();
        this.setState({loading:'block'})
        if (this.props.params.id)
            Actions.getEditPedidos(this.props.params.id);
    },

    componentDidMount: function() {
        
    },

    onGetDepartments: function(event, departments) {
        
        if (event === 'getDepartments') {
            departments = departments.map(function(dep) {
                return {
                    value: dep.id,
                    label: dep.description
                }
            });
              
            this.setState({departments: departments})    
        }
        
    },

    onEditPedido: function(e, cart, client) {

        if (e === 'editPedido') {
            this.updateSum(cart);
            this.setState({cartProducts: cart, clientSelected: client});
        }
    },
    onPostedPedido: function(e) {
        if (e === 'postedPedido') {
            History.push('/messages');
            History.replace({
                pathname: '/messages?status=OK&message=Pedido creado correctamente'
            })
        }
    },

    onPutPedido: function(e) {
        if (e === 'putPedido') {
            History.push('/messages');
            History.replace({
                pathname: '/messages?status=OK&message=Pedido modificado correctamente'
            })
        }

    },
    onChange: function(event, list) {
        if (event === 'change') {

            this.state.cartProducts.forEach(function(product, index) {
                this.updateProductList(list, product.code, product.qty, 'rest');
            }.bind(this));

            this.setState({productList: list, loading:''});
        }

    },

    onGetUser: function(event, user) {
        console.log(user);
        if (event === 'getUser')
            this.setState({user: user});

    },

    /*
    *    ShoppingCart Related Functions
    *
    *
    */
    addToCart: function(product) {
        var actCart = this.state.cartProducts;
        var list = this.state.productList;

        actCart.push(product);

        list = this.updateProductList(this.state.productList, product.code, product.qty, 'rest');

        this.setState({cartProducts: actCart, productList: list});
        this.updateSum(actCart);
    },

    removeFromCart: function(uuid) {
        var cartProducts = this.state.cartProducts;
        var list = this.state.productList;
        var newCart = cartProducts.filter(function(product){

            if (product['uuid'] === uuid) list = this.updateProductList(this.state.productList, product.code, product.qty, 'sum');
            return product['uuid'] !== uuid;
        }.bind(this));

        this.setState({cartProducts: newCart, productList: list});
        this.updateSum(newCart);
    },

    updateSum: function(cart) {
        var totals = {base:0, tax: 0};

        for (var i = 0; i <= cart.length-1; i++) {
            totals.base = totals.base + cart[i].subtotal;
        }

        totals.tax = Math.round((totals.base*12/100)*100,2)/100;
        this.setState({totals:totals});
    },

    submitCart: function(e) {
        this.setState({load: 'block'})
        if (this.props.route.editing) {
            var date = new Date(Date.now());
            var cliente = this.state.clientSelected;
            body = {
                client: cliente,
                id: this.props.params.id,
                fecha: date.getDay() + '-' + date.getMonth() + '-' + date.getFullYear(),
                total: this.state.totals.base,
                detallePedido: this.state.cartProducts,
                salesman: this.state.user.salesman
            }

            Actions.putPedido(body);

        }

        else {
            if (typeof this.state.clientSelected === 'object' && this.state.cartProducts.length > 0) {
                var cliente = this.state.clientSelected;
                var date = new Date(Date.now());
                var body = {
                    id: '',
                    cliente: cliente.name,
                    fecha: date.getFullYear() + '-' + date.getMonth() + '-' + date.getDay(),
                    total: this.state.totals.base,
                    detallePedido: this.state.cartProducts
                }
                Actions.postPedido(cliente, this.state.cartProducts, this.state.totals, this.state.user.salesman);
            } else {

                //!!!!!!Show message indicating that the request can't be done.!!!!!!!!

            }
        }

    },

    resetCart: function(e) {
        this.setState({cartProducts:[], totals:{base: 0, tax: 0}})
    },


    /*
    *    ClientDetails related functions
    *
    *
    */
    clientSelected: function(selected) {

        if (selected.codigo === undefined) {
            this.setState({cartProducts:[],
            totals: {
                base: 0,
                tax: 0,
            },
            clientSelected:false,
            loading:'',
            load: '',
            clientLoading: '',
            pAceite: false,});
        }

        else
            this.setState({clientSelected: selected});
    },

    clientIsLoading: function(loading) {
        loading
        ? this.setState({clientLoading:'block'})
        : this.setState({clientLoading: ''})
    },

    changepAceite: function(e) {
        this.setState({pAceite: e.target.checked});
    },


    /*
    *    ProductSearch Related Fucntions
    *
    *
    */
    updateProductList: function(list, code, qty, operation) {

        list.map(function(product, index) {
            if (product.code === code) {

                operation === 'rest'
                ? product.stock -= qty
                : product.stock += qty
                return product;
            } else {
                return product;
            }
        });

        return list;
    },

    filter: function(query, type) {
        /*var aceite = undefined;
        if (this.state.pAceite) aceite = true
        this.setState({loading:'block'});
        
        //Actions.getProducts(q, aceite);
        */
        var products = this.state.productList;

        if (type === 'select') {
            products = products.filter(function(product) {
                return product.department == query;
            });
        }

        if (type === 'text') {
            var reg = new RegExp(query, 'gi');
            products = products.filter(function(product) {
                return product.desc.match(reg) || product.code.match(reg);
            });
        }

        this.setState({filtered: products, loading:''});

    },

    isLoading: function() {
        this.setState({loading:'block'});
    },





    render: function() {
        
        var productsAndCart = false;
        var disabled = typeof this.state.clientSelected === 'object' ? true : false;
        if (typeof this.state.clientSelected === 'object') {
            productsAndCart = (
                <div className="row">
                    <div className="col-sm-12 animated zoomIn">

                        <ProductSearch addToCart={this.addToCart}
                             products={this.state.filtered}
                             filter={this.filter}
                             loading={this.state.loading}
                             isLoading={this.isLoading}
                             select={this.state.departments} />

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
            <div style={{position:'relative'}}>
            <Loading active={this.state.load} />
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

            <div className="row" style={{position:'relative'}}>
                <Loading active={this.state.clientLoading} />
                <div className="col-sm-12">
                    <ClientDetails client={this.state.clientSelected} 
                    clientSelected={this.clientSelected}
                    changepAceite={this.changepAceite}
                    disabled={disabled}
                    clientIsLoading={this.clientIsLoading} />
                </div>

            </div>
                <div>

                    {productsAndCart}
                    
                </div>
                
                
            </div>
        );
    }

});

module.exports = NuevoPedido;
