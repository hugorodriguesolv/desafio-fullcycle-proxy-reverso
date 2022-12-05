'use strict';

const express = require('express');
const mysql = require('mysql');

// Constants
const PORT = 5000;
const HOST = 'nodeserver';

// App
const connection = mysql.createPool({
  connectionLimit: 10,
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
});

const app = express();
app.set('view engine', 'ejs');
app.set('views', './views');


app.get('/', (req, res) => {
  
  var nome = req.query.nome;
  var query = "INSERT INTO People (Name) values ($1)";

  dbClient.query(query, nome, function(err){
    if(err)
      throw err;
    else {
      console.log('Nome inserido com sucesso!')    ;
      res.redirect('/');      
      res.end();
    }               
  }); 

});

app.listen(PORT, HOST, () => {
  console.log(`Este aplicativo está rodando em http://${HOST}:${PORT}`);
});