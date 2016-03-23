var React = require('react');
var ProductList = require('./ProductList.jsx');
var SearchFilters = require('./SearchFilters.jsx');
var Actions = require('../../reflux/Actions.jsx');
var Reflux = require('reflux');
var ProductStore = require('../../reflux/ProductStore.jsx');

var ProductSearch = React.createClass({

    //We load products as props to save the original products data for filtering
    mixins: [
        Reflux.listenTo(ProductStore, 'onChange'),
    ],

    //The products state changes upon filtering
    getInitialState: function() {
        return {
            products:[]
        };
    },


    onChange: function(e, products) {
        this.setState({products: products});
    },
    //This functions is passed to the corresponding childs to perform queries.
    filterProducts: function(q) {

        /*
        console.log(this.props.products);
        var query = new RegExp(q, 'gi');
        var products = this.props.products.filter(function(product){
            return product.desc.match(query) || product.code.toString().match(query);
        });

        this.setState({products:products.slice(0,5)});
        */
    },

    render: function() {
        return (
            <div className="componentWrap">
                <h3>Lista de Productos</h3>
            <SearchFilters filter={this.props.filter} isLoading={this.props.isLoading} />
            <ProductList addToCart={this.props.addToCart} loading={this.props.loading} products={this.state.products} />
            </div>
        );
    }

});

module.exports = ProductSearch;
