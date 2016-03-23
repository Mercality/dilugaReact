var React = require('react');
var SearchBox = require('./SearchBox.jsx');
var CategoryList = require('./CategoryList.jsx');
var categories = ['Aceite','Petroleo','Moto', 'Filtros', 'Frenos']; //This needs to load dynamically
var SearchFilters = React.createClass({

    render: function() {
        return (
            <div className="filtering">
                <SearchBox filter={this.props.filter} isLoading={this.props.isLoading} />  <CategoryList filter={this.props.filter} categories={categories} />
            </div>
        );
    }

});

module.exports = SearchFilters;
