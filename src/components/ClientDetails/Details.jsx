var React = require('react');
var PropTypes = React.PropTypes;

var Details = React.createClass({
    getDefaultProps: function() {
        return {
            client:{}
        };
    },

    render: function() {
        return (
            <div className="row clientDetails animated zoomIn">
                <div className="col-md-4 col-xs-8">
                    <h4><strong>Razón Social:</strong></h4>
                    <p>{this.props.client.name}</p>
                </div>

                <div className="col-md-4 col-xs-4">
                    <h4><strong>R.I.F:</strong></h4>
                    <p>{this.props.client.rif}</p>
                </div>

                <div className="col-md-4 col-xs-8">
                    <h4><strong>Teléfono:</strong></h4>
                    <p>{this.props.client.phone}</p>
                </div>

                <div className="col-md-4 col-xs-4">
                    <h4><strong>Email:</strong></h4>
                    <p>{this.props.client.email}</p>
                </div>

                <div className="col-sm-6 col-xs-12">
                    <h4><strong>Dirección:</strong></h4>
                    <p>{this.props.client.addr}</p>

                </div>
            </div>
        );
    }

});

module.exports = Details;
