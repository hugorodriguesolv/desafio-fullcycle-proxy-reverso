'use strict';

const express = require('express');

// Constants
const PORT = 5000;
const HOST = 'nodeserver';

// App
const app = express();
app.get('/', (req, res) => {
  res.send('Este é o desafio Full Cycle Proxy Reverso!');
});

app.listen(PORT, HOST, () => {
  console.log(`Este aplicativo está rodando em http://${HOST}:${PORT}`);
});