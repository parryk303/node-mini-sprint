const http = require('http');

//headers to allows CORS requests
const headers = {
  "access-control-allow-origin": "*",
  "access-control-allow-methods": "GET, POST, PUT, DELETE, OPTIONS",
  "access-control-allow-headers": "content-type, accept",
  "access-control-max-age": 10
};

const port = 3000;

const quotes = [
  'I\'m selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can\'t handle me at my worst, then you sure as hell don\'t deserve me at my best. -Marilyn Monroe',
  'Be yourself; everyone else is already taken. -Oscar Wilde',
  'Two things are infinite: the universe and human stupidity; and I\'m not sure about the universe. -Albert Einstein',
  'So many books, so little time. -Frank Zappa',
  'You know you\'re in love when you can\'t fall asleep because reality is finally better than your dreams. -Dr. Seuss'
];

//Utility Function to return a random integer
function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
}

const handleRequest = function(req, res) {
  console.log(`Endpoint: ${req.url} Method: ${req.method}`);

  // redirect users to /quote if they try to hit the homepage. This should already work, no changes needed
  if (req.url == '/') {
    console.log('redirecting');
    res.writeHead(301, {...headers, Location: `http://localhost:${port}/quote`}) //redirect to quote
    res.end();
  }

  // TODO: GET ONE
  if ((req.url == '/quote/' || req.url == '/quote') && req.method == "FILL ME IN") {
    //YOUR CODE HERE

  }
  // TODO: POST/CREATE
  else if ((req.url == 'FILL ME IN' || req.url == 'FILL ME IN') && req.method == "FILL ME IN") {
    //YOUR CODE HERE
  }

//CATCH ALL ROUTE
  else {
    res.writeHead(404,headers);
    res.end('Page not found');

  }
}

const server = http.createServer(handleRequest);
server.listen(port);

console.log('Server is running in the terminal!');
console.log(`Listening on http://localhost:${port}`);
