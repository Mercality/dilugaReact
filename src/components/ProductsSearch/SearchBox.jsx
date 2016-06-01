var React = require('react');
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
        this.filter(e.target.value, 'text');
    },


    render: function() {
        return (
            <span>
                <input onChange={this.onChange}
                     value={this.state.value}
                     type="text" size="10"
                     placeholder="Busqueda..."
                     className="form-control" />
            </span>
        );
    }

});

module.exports = SearchBox;
