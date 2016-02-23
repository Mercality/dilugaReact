var React = require('react');
var PropTypes = React.PropTypes;
var PedidoDetalle = require('./PedidoDetalle.jsx');
var Pedido = require('./Pedido.jsx')

var pedidos = [
    {
        id:1,
        cliente: 'Repuestos Los Gallegos',
        fecha: '2015-20-01',
        total: '45.000,00',
        detallePedido: [
            {
                code: '00xx32',
                desc: 'Bujia Champion 2567',
                qty: 6,
                price: 500.00
            }
        ]
    },
    {
        id:2,
        cliente: 'Repuestos Los Gallegos',
        fecha: '2015-20-01',
        total: '45.000,00',
        detallePedido: [
            {
                code: '00xx32',
                desc: 'Bujia Champion 2567',
                qty: 6,
                price: 500.00
            }
        ]
    },
    {
        id:3,
        cliente: 'Repuestos Los Gallegos',
        fecha: '2015-20-01',
        total: '45.000,00',
        detallePedido: [
            {
                code: '00xx32',
                desc: 'Bujia Champion 2567',
                qty: 6,
                price: 500.00
            }
        ]
    },
    {
        id:4,
        cliente: 'Repuestos Los Gallegos',
        fecha: '2015-20-01',
        total: '45.000,00',
        detallePedido: [
            {
                code: '00xx32',
                desc: 'Bujia Champion 2567',
                qty: 6,
                price: 500.00
            }
        ]
    }
];



var HistorialPedidos = React.createClass({

    getDefaultProps: function() {
        return {
            pedidos:pedidos
        };
    },
    render: function() {

        var pedidos = this.props.pedidos.map(function(pedido) {
            return <div><Pedido key={pedido.id+'p'} pedido={pedido} />
                   <PedidoDetalle key={pedido.id} pedido={pedido} /></div>
        });


        return (
            <div className="table">
                <table className="table">
                    <tbody>
                        <tr>
                            <th>Pedido</th><th>Cliente</th><th>Fecha</th><th>Total</th>
                        </tr>
                        {pedidos}
                    </tbody>
                  </table>
            </div>
        );
    }

});

module.exports = HistorialPedidos;
