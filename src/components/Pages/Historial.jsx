var React = require('react');
var HistorialPedidos = require('../HistorialPedidos/HistorialPedidos.jsx');

var Historial = React.createClass({

    render: function() {
        return (
            <div>
            <div className="row">
                <div className="col-lg-12">
                    <h1 className="page-header">
                        Historial <small>Historial de Pedidos</small>
                </h1>
                <ol className="breadcrumb">
                    <li className="active">
                        <i className="fa fa-dashboard"></i> Historial
                        </li>
                    </ol>
                </div>
            </div>
            <HistorialPedidos />
            </div>
        );
    }

});

module.exports = Historial;
