var React = require('react');
var Link = require('react-router/lib/Link');

var NavItem = React.createClass({

    render: function() {
        var url = document.URL;
        if (url.substr(url.lastIndexOf('#')+1) === this.props.href) {
            var className = 'active';
        }

        return (
            <li onClick={this.onClick} className={className}>
                <Link to={this.props.href}><i className={this.props.icon}></i> {this.props.text}</Link>
            </li>
        );
    }

});

module.exports = NavItem;
