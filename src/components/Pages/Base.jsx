var React = require('react');
var NavBar = require('../AdminPanel/NavBar/NavBar.jsx');
var PropTypes = React.PropTypes;

var Base = React.createClass({

    render: function() {
        return (
            <div id="wrapper">
                <NavBar />
                <div id="page-wrapper">

                    <div className="container-fluid">

                        {this.props.children}

                    </div>


                </div>
            </div>
        );
    }

});

module.exports = Base ;
