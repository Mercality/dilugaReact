var React = require('react');
var SearchBox = require('./SearchBox.jsx');
var CategoryList = require('./CategoryList.jsx');

var SearchFilters = React.createClass({

    render: function() {
        return (
            <div className="filtering">
                <SearchBox filter={this.props.filter} isLoading={this.props.isLoading} />  
                <CategoryList filter={this.props.filter} select={this.props.select} />
            </div>
        );
    }

});

module.exports = SearchFilters;
