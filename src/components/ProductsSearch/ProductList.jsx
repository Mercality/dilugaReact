var React = require('react');
var ProductRow = require('./ProductRow.jsx');
var Loading = require('../Loading.jsx');

var ProductList = React.createClass({

    render: function() {
        var products = this.props.products;
        products = products.filter(function(prod, index) {
            return index < 5;
        });
        
        products = products.map(function(product, index) {
            return <ProductRow addToCart={this.props.addToCart} key={product.code+Date.now()/3600} product={product} />;
        }.bind(this));


        return (
            <div style={{position:'relative'}} className="productsTable table-responsive">
            <Loading active={this.props.loading} />
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
