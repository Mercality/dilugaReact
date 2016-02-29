var React = require('react');
var ProductRow = require('./ProductRow.jsx');

var ProductList = React.createClass({

    render: function() {
        var products = this.props.products.map(function(product) {
            return <ProductRow product={product} />
        });
        return (
            <div className="productsTable table-responsive">
                <table className="table">
                    <tbody>
                        <tr>
                            <th>Codigo</th>
                            <th>Descripción</th>
                            <th className="text-center">Existencia</th>
                            <th className="text-center">Cantidad</th>
                            <th className="text-center">Precio</th>
                            <th className="text-center">Agregar</th>
                        </tr>
                        {products}
                    </tbody>
                </table>
            </div>
        );
    }

});

module.exports = ProductList;