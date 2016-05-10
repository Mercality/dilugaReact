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
                
                <select className="form-control" onChange={this.onChange} value={this.state.selected}>
                    <option value="" disabled defaultValue>Departamentos</option>
                    {options}
                </select>
            </span>
        );
    }

});

module.exports = CategoryList;
