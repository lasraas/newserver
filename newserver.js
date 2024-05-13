// server.js

const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT || 3000;

// Variable named 'db'
let db = {};

// Middleware for parsing JSON bodies
app.use(bodyParser.json());

// GET request handler for home/route
app.get('/', (req, res) => {
  res.send('GET request received');
});

// POST request handler for home/route
app.post('/', (req, res) => {
  // Assuming the request body contains JSON data
  // For demonstration purposes, let's just echo back the received data
  res.json(req.body);
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
