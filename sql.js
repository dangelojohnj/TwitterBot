var mysql = require('mysql');

module.exports = function() { 

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

 /*  this.nextSQLID = function(resp) { 
    
    	var sql = "SELECT Auto_increment FROM information_schema.tables WHERE table_name='tweet'";
				
		con.query(sql, function (err,result){
					
			if(err){
					
				console.log('Error grabbing auto increment: ');
				console.log(err);
				return err;
						
			}
  
 			else {
 				
 				var nextID = result[0].Auto_increment;
 				console.log("next ID value:"+nextID);
 				resp.send(nextID);
 				
			}
    	 });
      };*/ 
      
    
    this.insert = function(tweet){
		
		var tweetValue="\""+tweet+"\"";
		console.log(tweetValue);
		var sql = "INSERT into tweet (tweetID, tweetText) VALUES((SELECT Auto_increment FROM information_schema.tables WHERE table_name='tweet'),"\""+tweet+"\"");	
		console.log("this is what insert statement looks like "+sql);
	
		con.query(sql, function (err, result) {
   		
   			if (err) {
				
				console.log('Error inserting into database:');
				console.log(err);
				
			}
				
  			else console.log("1 record inserted");
	
		
			}
	
		)};
  
};