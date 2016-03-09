var React = require('react');


var ClientSearch = React.createClass({

    getInitialState: function() {
        return {
            codigo:'',
        };
    },

    onChange: function(e) {
        this.setState({codigo:e.target.value});
    },

    onSubmit: function(e) {
        this.props.onSubmit(e, this.state.codigo);
    },

    clickEdit: function(e) {
        this.props.clickEdit();
    },


    render: function() {
        var submit = false,
        edit = false;

        if (this.props.disable === false) {
            submit = <button type="submit" className="btn" ><i className="fa fa-search"></i></button>
        } else {
            edit = <button type="button" onClick={this.clickEdit} className="btn" ><i className="fa fa-pencil"></i></button>
        }
        return (
            <div className="input-group">
                <form action="" onSubmit={this.onSubmit} style={{display:'inherit'}}>
                    <input disabled={this.props.disable}
                        type="text"
                        placeholder="Codigo Cliente"
                        className="form-control"
                        onChange={this.onChange}
                        value={this.state.codigo}/>

                    <span style={{padding:0}} className="input-group-addon">
                        {submit}
                        {edit}
                    </span>

                </form>
                <span id="helpBlock" className="help-block">{this.props.errorMessage}</span>
            </div>
        );
    }

});

module.exports = ClientSearch;
