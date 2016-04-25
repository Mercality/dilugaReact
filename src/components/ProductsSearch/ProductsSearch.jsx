var React = require('react');
var ProductList = require('./ProductList.jsx');
var SearchFilters = require('./SearchFilters.jsx');


var ProductSearch = React.createClass({

    render: function() {
        return (
            <div className="componentWrap">
                <h3>Lista de Productos</h3>
            <SearchFilters filter={this.props.filter} isLoading={this.props.isLoading} />
            <ProductList addToCart={this.props.addToCart} loading={this.props.loading} products={this.props.products} />
            </div>
        );
    }

});

module.exports = ProductSearch;
