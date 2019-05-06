var https = require('https');

function getAndPrintHTMLChunks () {

    var requestOptions = {
      host: 'sytantris.github.io',
      path: '/http-examples/step1.html'
    };
    // var body = '';
    https.get(requestOptions, function(response){
        // if(response.statusCode !== 200)
        var body = '';
        
        response.setEncoding('utf8');
        response.on('data', function(data){
            body += data;
            console.log("\n " + body + " \n")
        });

        response.on('end', function(){
            console.log("Response completed")
        });
    }); 
    
  
  }

  getAndPrintHTMLChunks()
  