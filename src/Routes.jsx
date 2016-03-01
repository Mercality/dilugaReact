var React = require('react');
var ReactRouter = require('react-router');
var CreateHistory = require('history/lib/createHashHistory');

var Router = ReactRouter.Router;
var Route = ReactRouter.Route;

var History = new CreateHistory({
    queryKey: false
});

var Base = require('./components/Pages/Base.jsx');
var Historial = require('./components/Pages/Historial.jsx');
var NuevoPedido = require('./components/Pages/NuevoPedido.jsx');

var Routes  = (
    <Router history={History}>
        <Route path="/" component={Base}>
            <Route path="/historial" component={Historial} />
            <Route path="/pedido/nuevo" component={NuevoPedido} />
        </Route>
    </Router>
);

module.exports = Routes;
