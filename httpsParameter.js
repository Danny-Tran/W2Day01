var https = require("https")

function getAndPrintHTML (options) {

    https.get(requestOptions, function(response){
        
        var body = '';
        
        response.setEncoding('utf8');
        response.on('data', function(chunk){
            body += chunk;
            // console.log('\n ' + body +  ' \n')
        });

        response.on('end', function(){
            console.log('\n ' + body +  ' \n')
            console.log("Response completed")
        });
    }); 
    
  
  }
  
  var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step3.html'
  };
  
  getAndPrintHTML(requestOptions)
  