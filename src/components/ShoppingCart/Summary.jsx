var React = require('react');

var Summary = React.createClass({

    render: function() {
        return (
            <div className="summary">
                <span className="pull-left"></span>Base Imponible<span className="pull-right">{this.props.totals.base}</span>
                <br/>
                <span className="pull-left"></span>IVA<span className="pull-right">{this.props.totals.tax}</span>
                <br/>
                <span className="pull-left"></span>Total<span className="pull-right">{this.props.totals.base + this.props.totals.tax}</span>
            </div>
        );
    }

});

module.exports = Summary;
