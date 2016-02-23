var React = require('react');
var PropTypes = React.PropTypes;
var ProductoDetalle = require('./ProductoDetalle.jsx');


var PedidoDetalle = React.createClass({

    render: function() {
        var productos = this.props.pedido.detallePedido.map(function(producto) {
            return <ProductoDetalle key={producto.code} code={producto.code} desc={producto.desc} qty={producto.qty} price={producto.price} />
        });

        return (
            <tr>
                <td id={'detail'+this.props.pedido.id} className="hidden  animated zoomIn" colSpan="4">
                    <div className="table-responsive">
                        <table  className="table well">
                            <tbody>
                            <tr>
                                <th>Codigo</th><th>Descripcion</th><th>Cantidad</th><th>Subtotal</th>
                            </tr>
                                {productos}
                            </tbody>
                        </table>
                    </div>
                </td>
            </tr>
        );
    }

});

module.exports = PedidoDetalle;
