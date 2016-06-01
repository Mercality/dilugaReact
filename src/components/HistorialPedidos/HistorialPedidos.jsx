var React = require('react');
var PedidoDetalle = require('./PedidoDetalle.jsx');
var Pedido = require('./Pedido.jsx');
var Loading = require('../Loading.jsx');
var HistorialPedidos = React.createClass({

    render: function() {

        var pedidos = this.props.pedidos.map(function(pedido) {
            return (
                    <Pedido key={pedido.id+Date.now()/3600} pedido={pedido} />
            )
        });

        var detalles = this.props.pedidos.map(function(pedido) {
            var editable = !pedido.processed;
            return (
                    <PedidoDetalle key={Math.random()}  pedido={pedido} editable={editable} />
            )
        });
        var length = pedidos.length;
        var j = 1;
        for (var i = 0; i <= length-1; i++) {
            pedidos.splice(i+j, 0, detalles[i]);
            j++;
        }

        return (
            <div className="row">
                <div className="componentWrap" style={{position:'relative'}}>
                    <Loading active={this.props.loading} />
                    <h3>Ultimos Pedidos</h3>
                    <div className="table-responsive">
                        <table className="table">
                            <tbody>
                                <tr>
                                    <th>Pedido</th>
                                    <th>Cliente</th>
                                    <th>Fecha</th>
                                    <th className="text-center">Total</th>
                                    <th style={{width:50}}>Procesado</th>
                                </tr>
                                {pedidos}
                            </tbody>
                          </table>
                      </div>
                </div>
            </div>

        );
    }

});

module.exports = HistorialPedidos;
