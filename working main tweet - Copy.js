var express = require('express');
var bp = require ('body-parser');
var mysql = require('mysql');
var Twit = require('twit');

var app = express();
var tweetRec=false;
var nextID;

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
			
		
			console.log("Tweet Received!");
			tweetRec = true;
			console.log('Tweet received:'+tweetRec);
			
			var sql = "SELECT Auto_increment FROM information_schema.tables WHERE table_name='tweet'";
			con.query(sql, function (err,result){
				
				if(err){
					
					console.log('Error grabbing auto increment');
					console.log(result);
					
				}
  
 			else {
 				
 				console.log("success "+result);
 				
				}
				
  
  			var sql = "INSERT into tweet (tweetID, tweetText) VALUES 				("+4+",'first insert from node, this is how tweets w				ill be stored')";
  			
  			console.log("this is what insert statement looks like "+sql);
  			
 			 con.query(sql, function (err, result) {
   				 if (err) {
				
					console.log('Error inserting into database');
					console.log(result);
				}
				
  				 else console.log("1 record inserted");
   
  			});


T.post('statuses/update', { status: tweet }, function(err, data, response) {
  
  console.log(data);
  
});
		});

});
var con = mysql.createConnection({
  host: "localhost",
  user: "sa",
  password: "Go5mets!",
  database: "tweetStorage",
  port: 1234
});

con.connect(function(err) {
  if (err) {
  	
  	console.log('error connecting to DB');
  	console.log(err);
  	
		}
		
	else {
		
		console.log("DB connection succeeded!");
		
	}
	
	});

	