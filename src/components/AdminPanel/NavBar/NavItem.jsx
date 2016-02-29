var React = require('react');
var PropTypes = React.PropTypes;

var NavItem = React.createClass({

    render: function() {
        return (
            <li className={this.props.className}>
                <a href={this.props.href}><i className={this.props.icon}></i> {this.props.text}</a>
            </li>
        );
    }

});

module.exports = NavItem;
