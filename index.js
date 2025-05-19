const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
  fs.readFile('index.html', function(err, data) {
    if (err) {
      res.writeHead(404);
      res.end("Página no encontrada");
    } else {
      res.writeHead(200, {'Content-Type': 'text/html'});
      res.end(data);
    }
  });
});

server.listen(3000, () => {
  console.log("Servidor corriendo en http://localhost:3000");
});
