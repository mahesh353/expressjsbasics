// in this example we will see the configuration method of express to coonfigure the values that can use anywhere in the application

//import the express module

var express = require('express');
var app = express();

app.set('title','configuration title'); 

app.get('/',function(req,res){
    
    res.send('this value is fetched from configuration variable'+ app.get('title'));
});

app.listen(8080);
console.log('server is running on 8080..');

