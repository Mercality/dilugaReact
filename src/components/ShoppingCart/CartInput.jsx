var React = require('react');

var CartInput = React.createClass({

    render: function() {
        //<i></i>, <button>, <div>, <a>,
        if (this.props.inputType === 'i') {
            return (
                <i className={this.props.className}
                   onClick={this.this.props.onClick}>{this.props.content}</i>
            );
        }

        if (this.props.inputType === 'a') {
            return (
                <a className={this.props.className}
                   href={this.props.href}
                   onClick={this.this.props.onClick}>{this.props.content}</a>
            );
        }

        if (this.props.inputType === 'span') {
            return (
                <span className={this.props.className}
                      onClick={this.this.props.onClick}>{this.props.content}</span>
            );
        }

        if (this.props.inputType === 'div') {
            return (
                <div className={this.props.className}
                     onClick={this.this.props.onClick}>{this.props.content}</div>
            );
        }

        if (this.props.inputType === 'button') {
            return (
                <button className={this.props.className}
                        onClick={this.this.props.onClick}>{this.props.content}</button>
            );
        }



        return (
            <i className={this.props.className}>this.props.value</i>
        );
    }

});

module.exports = CartInput;
