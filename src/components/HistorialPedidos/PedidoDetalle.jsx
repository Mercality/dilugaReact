var React = require('react');
var ProductoDetalle = require('./ProductoDetalle.jsx');
var Link = require('react-router/lib/Link');
var uuid = require('../../services/uuid.js');

var PedidoDetalle = React.createClass({

    render: function() {
        var productos = this.props.pedido.detail.map(function(producto) {
            return <ProductoDetalle key={producto.product_code+uuid()}
                code={producto.product_code}
                desc={producto.product_desc}
                qty={producto.qty}
                price={producto.price} />
        });

        return (
            <tr>
                <td id={'detail'+this.props.pedido.id} className="hidden  animated zoomIn " colSpan="4">
                    <div className="table-responsive">
                        <table  className="table well">
                            <tbody>
                            <tr className="table-heading">
                                <th colSpan="5" className="text-center headLink">
                                    <Link className="editHeadLink" to={"/pedido/editar/"+this.props.pedido.id}>Editar</Link>
                                </th>
                            </tr>
                            <tr className="table-heading">
                                <th>Codigo</th><th>Descripcion</th><th className="productQty">Cantidad</th><th className="productQty">Precio</th><th className="productQty">Subtotal</th>
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
