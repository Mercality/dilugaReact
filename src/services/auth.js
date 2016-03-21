var AuthStore = require('../reflux/AuthStore.jsx');
var Actions = require('../reflux/Actions.jsx');
var AuthStore = require('../reflux/AuthStore.jsx');
var Auth = {
    check: function(nextState, replace) {

        if (AuthStore.auth_check() === false) {
            replace({
                pathname: '/login',
                state: { nextPathname: nextState.location.pathname }
            })
        }

    }
}


module.exports = Auth;
