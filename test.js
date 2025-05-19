const http = require('http');

// Opciones para hacer la petición al servidor
const options = {
  hostname: 'localhost',
  port: 3000,
  path: '/',
  method: 'GET',
};

const req = http.request(options, (res) => {
  let data = '';

  // Recibir datos en fragmentos
  res.on('data', (chunk) => {
    data += chunk;
  });

  // Cuando termina de recibir toda la respuesta
  res.on('end', () => {
    console.log('Código de estado:', res.statusCode);
    console.log('Encabezados:', res.headers);
    console.log('Contenido recibido:');
    console.log(data);

    // Aquí puedes hacer validaciones simples
    if (res.statusCode === 200 && data.includes('Hola mundo')) {
      console.log('✅ Prueba exitosa: servidor responde correctamente');
    } else {
      console.log('❌ Prueba fallida: respuesta inesperada');
    }
  });
});

req.on('error', (error) => {
  console.error('Error en la petición:', error.message);
});

req.end();
