var https = require('https');

function getAndPrintHTML () {

    var requestOptions = {
        host: 'sytantris.github.io',
        path: '/http-examples/step2.html'
      };
    // var body = '';
    https.get(requestOptions, function(response){
        // if(response.statusCode !== 200)
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

  getAndPrintHTML ()