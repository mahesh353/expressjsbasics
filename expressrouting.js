//use routing in express.js

var express = require('express');
//include the homeroute.js
home = require('./routes/homeroute.js');

customer = require('./routes/customerroute.js');

var app = express();

//here we have delegated the implementation of get callback function to another file i.e homeroute.js
app.get('/',home.index);
app.get('/customer',customer.customers);
app.get('/customer/contacts',customer.contacts);

app.listen(8080);

console.log('Server is running on 8080...');