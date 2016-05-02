var React = require('react');

var Pagination = require('react-js-pagination');
var SearchFilters = require('../ProductsSearch/SearchFilters.jsx');

var Reflux = require('reflux');
var ProductStore = require('../../reflux/ProductStore.jsx');
var Actions = require('../../reflux/Actions.jsx');


var Inventory = React.createClass({
	mixins: [
		Reflux.listenTo(ProductStore, 'onGetProducts'),
		Reflux.listenTo(ProductStore, 'onGetDepartments')
		],

	getInitialState: function() {
		return {
			products:[],
			filtered: [],
			departments: [],
			page: 1,
			loading: false
		};
	},

	componentWillMount: function() {
		Actions.getAllProducts();
		Actions.getDepartments();
	},

	onGetProducts: function(event, products) {
		if (event === 'change')
		this.setState({products: products});
	},

	onGetDepartments: function(event, departments) {
		if (event === 'getDepartments') {
			departments = departments.map(function(dep) {
				return {
					value: dep.id,
					label: dep.description
				}
			});

			this.setState({departments: departments});
		}
		
	},

	onChangePage: function(page) {
		this.setState({page: page});
	},

	filter: function(query, type) {
		var products = this.state.products;

		if (type === 'select') {
			products = products.filter(function(product) {
				return product.department == query;
			});
		}

		if (type === 'text') {
			var reg = new RegExp(query, 'gi');
			products = products.filter(function(product) {
				return product.desc.match(reg) || product.code.match(reg);
			});
		}
		
		
		

		this.setState({filtered: products});
		
	},

	isLoading: function() {
        this.setState({loading:'block'});
    },


    render: function() {
    	var products = this.state.filtered,
    	lines = [],
    	count = products.length;

    	products.forEach(function(product, index) {
    		
    		if (index <= 20 * this.state.page && index >= 20 * (this.state.page-1)) {

    			lines[index] = (
    			<tr key={product.code}>
    				<td>{product.code}</td>
    				<td>{product.desc}</td>
    				<td>{product.stock}</td>
    				<td>{product.price}</td>
    			</tr>
    			);
    		}
    		
    	}.bind(this));



        return (

            <div className="componentWrap">
            <h1>Lista de Productos</h1>

            <SearchFilters
            	filter={this.filter}
            	isLoading={this.isLoading}
            	select={this.state.departments} />

            <div className="text-center">
	            <Pagination
	                	activePage={this.state.page}
	                	totalItemsCount={count}
	                	itemsCountPerPage={20}
	                	onChange={this.onChangePage} />
             </div>   	
                <div className="table-responsive">
                	<table className="table">
                		<thead>
                			<tr>
		                		<th>Codigo</th>
		                		<th>Descripcion</th>
		                		<th>Existencia</th>
		                		<th>Precio</th>
                			</tr>
                		</thead>
                		
                		

                		<tbody>
                			{lines}

                		</tbody>
                	</table>

                </div>
            </div>
        );
    }

});

module.exports = Inventory ;
