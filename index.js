const http = require('http');
const PORT = 3000;

// Create a local server to receive data from
const server = http.createServer((req, res) => {
  if (req.url === '/product' && req.method === 'POST') {
    res.writeHead(201, { 'Content-Type': 'application/json' });
    return res.end(JSON.stringify({
      msg: 'Berhasil menanmbahkan product'
    }));
  } else if (req.url === '/product' && req.method === 'GET') {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    return res.end(JSON.stringify({
      name: 'Iphone 20',
      price: 5_000_000
    }));
  }

  res.writeHead(404, { 'Content-Type': 'application/json' });
  res.end(JSON.stringify({
    msg: 'Route not found'
  }));
});

server.listen(PORT, () => {
  console.log('Server listening on port:', PORT);
});