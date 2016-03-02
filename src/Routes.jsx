var React = require('react');
var ReactRouter = require('react-router');
var useRouterHistory = require('react-router').useRouterHistory;
var CreateHistory = require('history');
var IndexRoute = ReactRouter.IndexRoute;

var Router = ReactRouter.Router;
var Route = ReactRouter.Route;

var History = useRouterHistory(CreateHistory.createHashHistory)({
    queryKey: false
});

var Base = require('./components/Pages/Base.jsx');
var HomePage = require('./components/Pages/HomePage.jsx');
var Historial = require('./components/Pages/Historial.jsx');
var NuevoPedido = require('./components/Pages/NuevoPedido.jsx');

var Routes  = (
    <Router history={History}>
        <Route path="/" component={Base}>
            <IndexRoute component={HomePage} />
            <Route path="/historial" component={Historial} />
            <Route path="/pedido/nuevo" component={NuevoPedido} />
        </Route>
    </Router>
);

module.exports = Routes;
