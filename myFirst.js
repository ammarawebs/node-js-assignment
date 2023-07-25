var http = require('http');
var date =  require('./myFirstModule.js');

http.createServer(function (req, res){
    res.writeHead(200 , {'content-type' : 'text/html'})
    res.write('The Data and Time are currenly:'+ date.myDateTime())
    res.end()
}).listen(8080);