var React = require('react');
var PropTypes = React.PropTypes;
var SearchBox = require('./SearchBox.jsx');
var CategoryList = require('./CategoryList.jsx');
var categories = ['Aceite','Petroleo','Moto', 'Filtros', 'Frenos'];
var SearchFilters = React.createClass({

    render: function() {
        return (
            <div className="filtering">
                <SearchBox filter={this.props.filter} />  <CategoryList filter={this.props.filter} categories={categories} />
            </div>
        );
    }

});

module.exports = SearchFilters;
