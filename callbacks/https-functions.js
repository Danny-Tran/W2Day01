var https = require('https');
module.exports = function getHTML (options, callback) {
   
    https.get(options, function(response){
        
        var body = '';
        
        response.setEncoding('utf8');
        response.on('data', function(chunk){
            body += chunk;
            // console.log('\n ' + body +  ' \n')
        });

        response.on('end', function(){
            callback('\n ' + body +  ' \n')
            console.log("Response completed")
        });
    }); 
    
  
  
}

