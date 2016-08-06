//making this function available to other files using export

exports.index = function(req,res){
    res.send('Welcome to index page routing');
}