var React = require('react');

var ItemColumn = React.createClass({

    render: function() {

        if (this.props.itemType === 'table' && this.props.isHeader === true) {
            return (
                <th>{this.props.value}</th>
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
