//express js basics example:creating and server and getting response

//import express module
var express = require('express');

var app = express();

app.get('/',function(request,response){

    response.send('Welcome to express');
});

//url - localhost:8080/customers
app.get('/customers',function(request,response){
    response.send('Welcome to Customer section');
});

//url -localhost:8080/customers/create
app.get('/customers/create',function(request,response){
    response.send('This page is for creating customers!');
});

app.listen(8080);

console.log('Server is running on port no:8080...');
