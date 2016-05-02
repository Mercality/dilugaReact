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
        this.props.filter(e.target.value, 'select');
    },
    render: function() {

        var options = this.props.select.map(function(option) {

            return <option key={option.value} value={option.value}>{option.label}</option>
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
