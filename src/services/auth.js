var AuthStore = require('../reflux/AuthStore.jsx');
var Actions = require('../reflux/Actions.jsx');
var History = require('react-router/lib/hashHistory');

var Auth = {
    check: function(nextState, replace) {

        if (AuthStore.auth_check() === false) {
            History.push(nextState.location.pathname);
            replace({
                pathname: '/login',
                state: { nextPathname: nextState.location.pathname }
            })
        }

    }
}


module.exports = Auth;
