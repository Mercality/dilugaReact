var React = require('react');
var SearchBox = require('./SearchBox.jsx');
var CategoryList = require('./CategoryList.jsx');

var SearchFilters = React.createClass({

    render: function() {
        return (
            <div className="filtering">
            	<div className="row">
            	<div className="col-xs-3">
            		<SearchBox filter={this.props.filter} isLoading={this.props.isLoading} />
            	</div>
            	<div className="col-xs-3">
            		 <CategoryList filter={this.props.filter} select={this.props.select} />
            	</div>
            	</div>
                  
               
            </div>
        );
    }

});

module.exports = SearchFilters;
