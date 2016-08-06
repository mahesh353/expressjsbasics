//Configure the variable

var express = require('express');
var path = require('path');
var app = express();

//setting the configuration varibles

app.set('view engine','jade');
app.set('views',__dirname+'/views');
app.use(express.static(path.join(__dirname,'public')));

app.get('/:viewname',function(req,res){
   res.render(req.params.viewname); 
});

app.post('/',function(req,res){
   res.send('Posted name'+ req.params.name); 
});



app.listen(8080);

console.log('server is running on 8080...');