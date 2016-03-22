var React = require('react');
var ProductList = require('./ProductList.jsx');
var SearchFilters = require('./SearchFilters.jsx');
var products = require('../../mockData.js').products; //Remove when conected to web service

var ProductSearch = React.createClass({

    //We load products as props to save the original products data for filtering


    //The products state changes upon filtering
    getInitialState: function() {
        return {
            products:[]
        };
    },



    //This functions is passed to the corresponding childs to perform queries.
    filterProducts: function(q) {
        console.log(this.props.products);
        var query = new RegExp(q, 'gi');
        var products = this.props.products.filter(function(product){
            return product.desc.match(query) || product.code.toString().match(query);
        });

        this.setState({products:products.slice(0,5)});
    },

    render: function() {
        return (
            <div className="componentWrap">
                <h3>Lista de Productos</h3>
                <SearchFilters filter={this.filterProducts} />
                <ProductList addToCart={this.props.addToCart} products={this.state.products} />
            </div>
        );
    }

});

module.exports = ProductSearch;
