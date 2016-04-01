var React = require('react');

var Summary = React.createClass({

    render: function() {
        return (
            <div className="summary">
                <span className="pull-left"></span>Base Imponible<span className="pull-right">{this.props.totals.base.toFixed(2)}</span>
                <br/>
                <span className="pull-left"></span>IVA<span className="pull-right">{this.props.totals.tax.toFixed(2)}</span>
                <br/>
                <span className="pull-left"></span>Total<span className="pull-right">{(Math.round((this.props.totals.base + this.props.totals.tax)*100,2)/100).toFixed(2)}</span>
            </div>
        );
    }

});

module.exports = Summary;
