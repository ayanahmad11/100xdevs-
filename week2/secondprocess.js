//.. fetch(URl,object)
// fetch is a library similar to fs and express
// fetch lets you to send the request to http server {index.js}and get the response
// const fetch = require('node-fetch');
// import fetch from 'node-fetch';

function logResponseBody(jsonBody){
        console.log(jsonBody)
}
function callbackFn(result) {

    result.json().then(logResponseBody)
}

var url = 'http://localhost:3000/handlesum?counter=100';

var sendObj = {
    method: 'GET' // Method property directly in the URL options
};

fetch(url, sendObj)
    .then(callbackFn)
    .catch(error => console.error('Error:', error));
