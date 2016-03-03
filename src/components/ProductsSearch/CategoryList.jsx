var React = require('react');
var PropTypes = React.PropTypes;

var CategoryList = React.createClass({
    getInitialState: function() {
        return {
            selected: ''
        };
    },
    onChange: function(e) {
        this.setState({selected:e.target.value});
        this.props.filter(e.target.value);
    },
    render: function() {

        var options = this.props.categories.map(function(category) {
            return <option key={category+Date.now()/3600} value={category}>{category}</option>
        });

        return (
            <span>
                <label>Categorias: </label>
                <select onChange={this.onChange} value={this.state.selected}>
                    {options}
                </select>
            </span>
        );
    }

});

module.exports = CategoryList;
