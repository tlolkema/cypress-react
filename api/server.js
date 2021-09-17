const { request } = require('express');
const express = require('express'); 
const app = express(); 
const port = process.env.PORT || 5000; 
const frameworks = require('./frameworks.json')

app.use(express.urlencoded({extended: true}));
app.use(express.json()) // To parse the incoming requests with JSON payloads

app.listen(port, () => console.log(`Listening on port ${port}`)); 

app.get('/name', (req, res) => { 
  res.send({ name: 'Cypress' }); 
});

app.get('/frameworks', (req, res) => { 
    res.header("Content-Type",'application/json');
    res.send(JSON.stringify(frameworks));
});

app.post('/login', (req, res) => { 
  res.header("Content-Type",'application/json');

  if (req.body.name == 'admin' && req.body.password == 'admin') {
    res.cookie('session',true, { maxAge: 900000, httpOnly: true });
    res.status(200);
    res.send({ status: 'OK' });
  }

  else {
    res.status(400);
    res.send({ status: 'ERROR' });
  }  
});
