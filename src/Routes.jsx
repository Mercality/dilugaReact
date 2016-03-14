var React = require('react');
var Router = require('react-router/lib/router')
var useRouterHistory = require('react-router/lib/useRouterHistory');
var hashHistory = require('history/lib/createHashHistory');
var IndexRoute = require('react-router/lib/IndexRoute');

var Route = require('react-router/lib/Route');

var History = useRouterHistory(hashHistory)({
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
            <Route path="/pedido/editar/:id" editing="true" component={NuevoPedido} />
        </Route>
    </Router>
);

module.exports = Routes;
