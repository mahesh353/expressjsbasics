//passing parameter in url as query and param

var express = require('express');

var app = express();

//here we have delegated the implementation of get callback function to another file i.e homeroute.js
//url - localhost:8080/customer/20
app.get('/customer/:id',function(req,res){
    res.send('You have passed the id ' + req.params.id);
});

//url - localhost:8080/customer?id=20
app.get('/customer',function(req,res){
    res.send('You have passed the id ' + req.query['id']);;
});


app.listen(8080);
console.log('Server is running on 8080...');