var React = require('react');
var Router = require('react-router/lib/router')
var useRouterHistory = require('react-router/lib/useRouterHistory');
var hashHistory = require('history/lib/createHashHistory');
var IndexRoute = require('react-router/lib/IndexRoute');
var Auth = require('./services/auth.js');
var Route = require('react-router/lib/Route');

var History = useRouterHistory(hashHistory)({
    queryKey: false
});

var Base = require('./components/Pages/Base.jsx');
var HomePage = require('./components/Pages/HomePage.jsx');
var Historial = require('./components/Pages/Historial.jsx');
var NuevoPedido = require('./components/Pages/NuevoPedido.jsx');
var LoginPage = require('./components/Pages/LoginPage.jsx');
var UserProfile = require('./components/Pages/UserProfile.jsx');
var Messages = require('./components/Messages.jsx');

var Inventory = require('./components/Pages/Inventory.jsx');

var Routes  = (
    <Router history={History}>
        <Route path="/" component={Base} onEnter={Auth.check}>
            <IndexRoute component={HomePage} />
            <Route path="/messages" component={Messages} />
            <Route path="/historial" component={Historial} onEnter={Auth.check} />
            <Route path="/pedido/nuevo" component={NuevoPedido} />
            <Route path="/pedido/editar/:id" editing="true" component={NuevoPedido} />
            <Route path="/productos" component={Inventory} />
            <Route path="/user" component={UserProfile} />
        </Route>
        <Route path="/login" component={LoginPage} onEnter={Auth.loginCheck} />
        <Route path="/logout" component={LoginPage} onEnter={Auth.logout} />

    </Router>
);


module.exports = Routes;
