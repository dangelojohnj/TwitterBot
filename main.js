var http = require('http');
var express = require ('express');
var bodyParser = require ('body-parser');
fs = require('fs');

var app = express ();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

fs.readFile('index.html', function (err, html) {
    if (err) {
        throw err; 
    }       
	
	http.createServer(function(request, response){  
        response.writeHeader(200, {"Content-Type": "text/html"});  
        response.write(html); 
        response.end();  
			}).listen(8080);
			
	console.log("Listening locally on port 8080");
       
});


app.post('',function(request,response){

	var tweet=request.body.tweet;
	console.log(tweet);
});
