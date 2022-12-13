const { json } = require('express');
const express = require('express');
const mysql = require('mysql');

// Constants
const PORT = 5000;
const HOST = 'nodeserver';

// App
var connection = mysql.createConnection({
  connectionLimit: 10,
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE
});

const app = express();
app.set('view engine', 'ejs');
app.set('views', './views');


app.get('/', (req, res) => {
  

  var query = "INSERT INTO People (Name) values ('Hugo Rodrigues')";
  connection.query(query, (err) => {
    if(err)
      throw err;
    else {
      console.log('Nome inserido com sucesso!');
    }               
  });

  var query = "SELECT * FROM People";
  connection.query(query, (err, rows) => {
    if(err)
      throw err;
    else {
      var people = {people: rows};
      res.render('people', people);
    }               
  });

});

app.listen(PORT, HOST, () => {
  console.log(`Este aplicativo está rodando em http://${HOST}:${PORT}`);
});