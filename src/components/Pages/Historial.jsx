var React = require('react');
var PropTypes = React.PropTypes;
var HistorialPedidos = require('../HistorialPedidos/HistorialPedidos.jsx');

var Historial = React.createClass({

    render: function() {
        return (
            <HistorialPedidos />
        );
    }

});

module.exports = Historial;
