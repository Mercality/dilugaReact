var React = require('react');
var Link = require('react-router').Link;
var NavItem = require('./NavItem.jsx');
var UserMenu = require('./UserMenu.jsx');
var classie = require('desandro-classie');
var NavBar = React.createClass({
    onClick: function(e) {

    },
    getActive: function() {

    },
    render: function() {
        return (
                <nav className="navbar navbar-inverse navbar-fixed-top" role="navigation">

                    <div className="navbar-header">
                        <button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".navbar-ex1-collapse">
                            <span className="sr-only">Toggle navigation</span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                        </button>
                        <Link style={{padding:4}} className="navbar-brand" to="/"><img style={{maxWidth:100}} src="images/logo.png" alt=""/></Link>
                    </div>

                    <UserMenu />

                    <div className="collapse navbar-collapse navbar-ex1-collapse">
                        <ul onClick={this.onClick} className="nav navbar-nav side-nav">
                            <NavItem  className="" href="/historial" icon="fa fa-w fa-history" text="Historial de Pedidos" />
                            <NavItem  className="" href="/pedido/nuevo" icon="fa fa-w fa-pencil" text="Tomar Pedido" />
                            <NavItem  className="" href="#" icon="fa fa-w fa-facebook" text="Page" />
                            <NavItem  className="" href="#" icon="fa fa-w fa-table" text="Tables" />
                        </ul>
                    </div>

                </nav>

        );
    }

});

module.exports = NavBar;
