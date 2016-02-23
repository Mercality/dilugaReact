var React = require('react');
var PropTypes = React.PropTypes;
var PedidoDetalle = require('./PedidoDetalle.jsx');
var Pedido = require('./Pedido.jsx');
var pedidos = require('../../mockData.js'); //Remove this when http service is set.

var HistorialPedidos = React.createClass({

    getDefaultProps: function() {
        return {pedidos:pedidos};
    },

    render: function() {
        var pedidos = this.props.pedidos.map(function(pedido) {
            return <div><Pedido key={pedido.id+'p'} pedido={pedido} />
                   <PedidoDetalle key={pedido.id} pedido={pedido} /></div>
        });

        return (
            <div className="componentWrap">
                <h3>Ultimos Pedidos</h3>
                <table className="table">
                    <tbody>
                        <tr>
                            <th>Pedido</th><th>Cliente</th><th>Fecha</th><th className="text-center">Total</th>
                        </tr>
                        {pedidos}
                    </tbody>
                  </table>
            </div>
        );
    }

});

module.exports = HistorialPedidos;
