var React = require('react');
var Link = require('react-router').Link;
var PropTypes = React.PropTypes;

var NavItem = React.createClass({

    render: function() {
        return (
            <li className={this.props.className}>
                <Link to={this.props.href}><i className={this.props.icon}></i> {this.props.text}</Link>
            </li>
        );
    }

});

module.exports = NavItem;
