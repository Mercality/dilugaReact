var React = require('react');
var PropTypes = React.PropTypes;

var CategoryList = React.createClass({

    onChange: function(e) {
        this.props.filter(e.target.value);
    },
    render: function() {

        var options = this.props.categories.map(function(category) {
            return <option value={category}>{category}</option>
        });

        return (
            <span>
                <label>Categorias: </label>
                <select onChange={this.onChange}>
                    {options}
                </select>
            </span>
        );
    }

});

module.exports = CategoryList;
