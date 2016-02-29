var React = require('react');

var ItemColumn = React.createClass({

    render: function() {

        if (this.props.itemType === 'table' && this.props.isHeader === true) {
            var width = this.props.value.width > 0 ? {width:this.props.value.width} : {}
            return (
                <th style={width}>{this.props.value.title}</th>
            );
        }

        if (this.props.itemType === 'table') {
            return (

                <td>{this.props.value}</td>
            );
        }


        if (this.props.itemType === 'div') {
            return (
                <span>{this.props.value}</span>
            );
        }

    }

});

module.exports = ItemColumn;
