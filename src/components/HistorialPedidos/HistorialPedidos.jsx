var React = require('react');
var PropTypes = React.PropTypes;
var PedidoDetalle = require('./PedidoDetalle.jsx');
var Pedido = require('./Pedido.jsx');

var Reflux = require('reflux');
var Actions = require('../../reflux/Actions.jsx');
var PedidosStore = require('../../reflux/PedidosStore.jsx');

var pedidos = require('../../mockData.js').pedidos; //Remove this when http service is set.


var HistorialPedidos = React.createClass({

    mixins: [Reflux.listenTo(PedidosStore, 'onChange')],

    getInitialState: function() {
        return {
            pedidos:[]
        };
    },
    getDefaultProps: function() {
        return {pedidos:pedidos};
    },

    render: function() {

        var pedidos = this.props.pedidos.map(function(pedido) {
            return (
                    <Pedido key={pedido.id+Date.now()/3600} pedido={pedido} />
            )
        });

        var detalles = this.props.pedidos.map(function(pedido) {
            return (
                    <PedidoDetalle key={Math.random()}  pedido={pedido} />
            )
        });
        var length = pedidos.length;
        var j = 1;
        for (var i = 0; i <= length-1; i++) {
            pedidos.splice(i+j, 0, detalles[i]);
            j++;
        }

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
