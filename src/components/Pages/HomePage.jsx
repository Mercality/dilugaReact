var React = require('react');
var PropTypes = React.PropTypes;

var HomePage = React.createClass({

    render: function() {
        return (
            <div className="componentWrap">
                <h1>Selección de Cliente</h1>
                <div className="row">
                    <div className="from-group col-md-2 col-sm-4 col-xs-8">
                        <input type="text" placeholder="Codigo Cliente" className="form-control"/>
                    </div>
                    <div className="col-sm-8 col-xs-12">
                        <h4 className="text-right"><strong>Ultimo Pedido: </strong><span>03 de marzo de 2016</span></h4>
                    </div>
                </div>

                <div className="row clientDetails">
                    <div className="col-md-4 col-xs-8">
                        <h4><strong>Razón Social:</strong></h4>
                        <p>Repuestos Los Gallegos</p>
                    </div>

                    <div className="col-md-4 col-xs-4">
                        <h4><strong>R.I.F:</strong></h4>
                        <p>J30425654</p>
                    </div>

                    <div className="col-md-4 col-xs-8">
                        <h4><strong>Teléfono:</strong></h4>
                        <p>0235-3422077</p>
                    </div>

                    <div className="col-md-4 col-xs-4">
                        <h4><strong>Email:</strong></h4>
                        <p>repuestos@reloga.com.ve</p>
                    </div>

                    <div className="col-sm-6 col-xs-12">
                        <h4><strong>Dirección:</strong></h4>
                        <p>Calle real salida hacia tucupido, loal s/n al lado de es los gallegos</p>

                    </div>
                </div>

            </div>
        );
    }

});

module.exports = HomePage;
