var React = require('react');
var PropTypes = React.PropTypes;

var Loading = React.createClass({

    render: function() {

        return (
            <div style={{display:this.props.active}} className="icon-hover">
                <div className="hover-content">
                    <i className="fa fa-spinner fa-4x animated"></i>
                </div>
            </div>
        );
    }

});

module.exports = Loading;
