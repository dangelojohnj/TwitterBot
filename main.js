var express = require('express');
var bp = require ('body-parser');
var Twit = require('twit');
var seequel = require('./sql.js');

var db = new seequel();
var app = express();

var T = new Twit({
  consumer_key:    'btxSWQEkZoqjliHvyfudqKI9M',
  consumer_secret: '0eMwvzxT6QDm72uaJqp2lXJM9lZaLCDsuSYICaLONhnQG5Dw7s',
  access_token:'913236235019268096-YYYUOssbYbwrRzAIQJrlIkWpiWTBqhT',
  access_token_secret:'K98uky84NAOKsqEWWdri9JMeCkGmrBajVQtoCAR9DVroS',
  timeout_ms:           60*1000,  // optional HTTP request timeout to apply to all requests.
});

app.use(bp.urlencoded({ extended: false }));

//app.configure, app.use etc

app.listen(8080);

console.log("Express listening on port 8080!");

app.get('/', function(req, res) {
    res.sendFile(__dirname+"/index.html");
    console.log("Get function complete!");
});

app.post('/tweet',function(request,response){
			
			var tweet=request.body.tweet;
			console.log(tweet);
			
			response.writeHead(200);
			response.end(tweet);
			
		
			console.log("Tweet Received:"+tweet);

			//var id=db.nextSQLID(callback);
				
			//db.nextSQLID(resp);
				
			
			//console.log("id equals"+id);
			
			//console.log("what id is before insert:"+id)
			
			db.insert(tweet);
			
			
			//T.post('statuses/update', { status: tweet }, function(err, data, response) {
  
  			//console.log(data);
  
});


	