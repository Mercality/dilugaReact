var React = require('react');
var Pagination = require('react-js-pagination');

var HistorialPedidos = require('../HistorialPedidos/HistorialPedidos.jsx');

var Reflux = require('reflux');
var Actions = require('../../reflux/Actions.jsx');
var PedidosStore = require('../../reflux/PedidosStore.jsx');

var Historial = React.createClass({

    mixins: [Reflux.listenTo(PedidosStore, 'onChange')],

    getInitialState: function() {
        return {
            loading:false,
            count:1,
            perPage: 10,
            page:1,
            pedidos:[] // {id, date, client_id, lines, subtotal, tax, total, salesman_id}
        };
    },

    componentWillMount: function() {
        this.setState({loading:'block'});
        Actions.getPedidos();
    },
    onChange: function(e, pedidos) {
        this.setState({pedidos:pedidos.data, count: pedidos.total, loading:false});
    },
    pageChange: function(page) {
        this.setState({page:page, loading:'block'});
        Actions.getPedidos(page);
    },
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

            <HistorialPedidos pedidos={this.state.pedidos} loading={this.state.loading} />

            <Pagination activePage={this.state.page}
                totalItemsCount={this.state.count}
                itemsCountPerPage={this.state.perPage}
                pageRangeDisplayed={5}
                onChange={this.pageChange} />
            </div>
        );
    }

});

module.exports = Historial;
