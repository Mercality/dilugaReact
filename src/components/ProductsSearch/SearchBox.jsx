var React = require('react');
var PropTypes = React.PropTypes;

var SearchBox = React.createClass({
    getInitialState: function() {
        return {
            value:''
        };
    },

    onChange: function(e) {
        this.setState({value:e.target.value});
        this.props.filter(e.target.value);
    },

    render: function() {
        return (
            <span>
                <label>Busqueda: </label> <input onChange={this.onChange}
                                                 value={this.state.value}
                                                 type="text" size="10"
                                                 placeholder="Filtro..." />
            </span>
        );
    }

});

module.exports = SearchBox;
