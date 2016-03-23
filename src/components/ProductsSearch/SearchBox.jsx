var React = require('react');
var delay = require('../../services/delay');
var _ = require('underscore');

var SearchBox = React.createClass({
    getInitialState: function() {
        return {value:''};
    },

    componentWillMount: function() {
        this.filter = _.debounce(this.props.filter, 400);
    },

    onChange: function(e) {
        this.setState({value:e.target.value});
        this.props.isLoading();
        //Filters the objects in parent Element
        this.filter(e.target.value);
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
