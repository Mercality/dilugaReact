var express = require('express');
var bodyParser = require('body-parser');
var data = require('./src/mockData.js');
var app = express();

//Allow all requests from all domains & localhost
app.all('/*', function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With, Content-Type, Accept");
  res.header("Access-Control-Allow-Methods", "POST, GET, PUT");
  next();
});


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));




app.get('/pedidos', function(req, res) {
    console.log("GET From SERVER");
    res.send(data.pedidos);
});





app.get('/productos', function(req, res) {
    console.log("GET From SERVER");
    res.send(data.products);
});





app.get('/clientes/:id', function(req, res) {
    console.log("GET From SERVER");

    var cliente = data.clientes.filter(function(client) {
        return client['codigo'] == req.params.id;
    });

    cliente = cliente[0];

    var response = {
        status:'',
        json: cliente,
        text:''
    }
    if (typeof cliente !== 'object') {
        response.status = 404;
        response.statusText = "Not Found";

        res.status(404).send(response);
    } else {
        response.status = 200;
        response.statusText = "Ok";

        res.status(200).send(response);
    }

});





app.post('/pedidos', function(req, res) {
    var pedido = req.body;
    pedido.id = Math.floor(Date.now()/1000) + pedido.cliente;

    data.pedidos.push(pedido);
    res.status(200).send(pedido);
    console.log(pedido);
});

app.put('/pedido/:id', function(req, res) {
    var id = req.params.id;
    console.log(id)
    var editado = req.body;
    data.pedidos = data.pedidos.map(function(pedido){
        if (pedido.id == id) {
            pedido.cliente = editado.cliente;
            pedido.fecha = editado.fecha;
            pedido.total = editado.total;
            pedido.detallePedido = editado.detallePedido;

            return pedido;
        }
        else {
            return pedido
        }

    })


    res.status(200).send(editado);
    console.log("PUT TO SERVER");
});

app.get('/pedido/:id', function(req, res) {
    var id = req.params.id;

    var pedido = data.pedidos.filter(function(pedido) {
        return pedido['id'] == id;
    });

    pedido = pedido[0];
    res.status(200).send(pedido);
});

app.listen(6069);
