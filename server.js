/*
// server.mjs
import { createServer } from 'node:http';

const server = createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Hola Mundo\n');
});

// starts a simple http server locally on port 3000
server.listen(3000, '127.0.0.1', () => {
  console.log('Listening on 127.0.0.1:3000');
});
*/

// server.mjs
const express = require('express'); 
const app = express();
app.use(express.static('public'));

app.get('/hello-world', (req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Hello World!\n');
});

app.listen(3000, '127.0.0.1', () => {
  console.log('Listening on 127.0.0.1:3000');
});

