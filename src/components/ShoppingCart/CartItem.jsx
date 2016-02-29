var React = require('react');
var ItemColumn = require('./ItemColumn.jsx');

var CartItem = React.createClass({

    render: function() {

        var columns = [];
        //Check for every of the objects properties and generate a column for
        //each one, the object must be already filtered and ordered as desired.
        for (var key in this.props.product) {
            if(this.props.product[key].hasOwnProperty('width')) {
                var value = this.props.product[key];
            } else {
                var value = this.props.product[key];
            }


            columns.push(<ItemColumn key={Math.random()} value={value} itemType={this.props.itemType} isHeader={this.props.isHeader} />);
        }

        if (this.props.ItemType === 'table') {
            return (
                <tr>
                    {columns}
                </tr>
            );
        }

        if (this.props.itemType === 'div') {
            return (
                <div className="componentWrap">
                    {columns}
                </div>
            );
        }

        return (
            <tr>
                {columns}
            </tr>
        );

    }

});

module.exports = CartItem;
