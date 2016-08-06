//making this function available to other files using export

exports.customers = function(req,res){
    res.send('Welcome to Customer section');
}

exports.contacts = function(req,res){
    res.send('Welcome to Customer contact section');
}