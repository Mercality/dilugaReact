var React = require('react');
var ClientDetails = require('../ClientDetails/ClientDetails.jsx');
var PropTypes = React.PropTypes;

var HomePage = React.createClass({

    render: function() {
        return (
            <ClientDetails />
        );
    }

});

module.exports = HomePage;
