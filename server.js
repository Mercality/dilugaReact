var express = require('express');
var bodyParser = require('body-parser');
var data = require('./src/mockData.js');
var app = express();

//Allow all requests from all domains & localhost
app.all('/*', function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With, Content-Type, Accept");
  res.header("Access-Control-Allow-Methods", "POST, GET");
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
    res.send(cliente[0]);
});

app.post('/products', function(req, res) {
    var subscriber = req.body;
    subscriber.id = Math.floor(Date.now()/1000) + subscriber.email;

    subscribers.push(subscriber);
    res.status(200).send("Successfully posted subscriber");
    console.log(subscribers);
});

app.listen(6069);
