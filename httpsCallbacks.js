var https = require('https')

function getHTML (options, callback) {
    https.get(requestOptions, function(response){
        
        var body = '';
        
        response.setEncoding('utf8');
        response.on('data', function(chunk){
            body += chunk;
            // console.log('\n ' + body +  ' \n')
        });

        response.on('end', function(){
            printHTML('\n ' + body +  ' \n')
            console.log("Response completed")
        });
    }); 
    
  
  }
  
  function printHTML (html) {
    console.log(html);
  }
  
  var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step4.html'
  };

  getHTML(requestOptions,printHTML)