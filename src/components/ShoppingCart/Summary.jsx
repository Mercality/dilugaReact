var React = require('react');

var Summary = React.createClass({

    render: function() {
        return (
            <div className="summary">
                <span className="pull-left"></span>Base Imponible<span className="pull-right">234230.00</span>
                <br/>
                <span className="pull-left"></span>IVA<span className="pull-right">2540.21</span>
                <br/>
                <span className="pull-left"></span>Total<span className="pull-right">26879.56</span>
            </div>
        );
    }

});

module.exports = Summary;
