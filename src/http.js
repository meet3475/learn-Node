// var https = require('https');

// https.createServer(function (req, res) {
//   res.writeHead(200, {'Content-Type': 'text/plain'});
//   res.write('Hello World!');
//   res.end();
// }).listen(8080);


//The HTTPS module provides a way of making Node. js transfer data over HTTP TLS/SSL protocol, which is the secure HTTP protocol.(HTTPS મોડ્યુલ નોડ બનાવવાની રીત પ્રદાન કરે છે. js HTTP TLS/SSL પ્રોટોકોલ પર ડેટા ટ્રાન્સફર કરે છે, જે સુરક્ષિત HTTP પ્રોટોકોલ છે.)

//HTTP: When the data is transferred in HTTP protocol it just travels in the clear text format. (HTTP: જ્યારે HTTP પ્રોટોકોલમાં ડેટા ટ્રાન્સફર કરવામાં આવે છે ત્યારે તે સ્પષ્ટ ટેક્સ્ટ ફોર્મેટમાં મુસાફરી કરે છે.)

//SSL (Secure Socket Layer)
//TLS (Transport layer security)

//Step 1: Generate SSL certificates. The first step in securing your NodeJS app with HTTPS is to obtain an SSL certificate. ...
//Step 2: Set up HTTPS in NodeJS. ...
//Step 3: Redirect HTTP traffic to HTTPS.



const http = require('http');
 
let options = {
    host: 'www.geeksforgeeks.org',
    path: '/courses',
    method: 'GET'
};
 
// Making a get request to
// 'www.geeksforgeeks.org'
http.request(options, (response) => {
 
    // Printing the statusCode
    console.log(`STATUS: ${response.statusCode}`);
}).end()