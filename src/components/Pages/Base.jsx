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


                        <div className="row">
                            <div className="col-lg-12">
                                <h1 className="page-header">
                                    Dashboard <small>Statistics Overview</small>
                            </h1>
                            <ol className="breadcrumb">
                                <li className="active">
                                    <i className="fa fa-dashboard"></i> Dashboard
                                    </li>
                                </ol>
                            </div>
                        </div>

                        {this.props.children}

                    </div>


                </div>
            </div>
        );
    }

});

module.exports = Base ;
