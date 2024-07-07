//importing express, creating path, api, port and app
const express = require('express');
const path = require('path');
const api = require('./routes');
const PORT = 3001;

const app = express();

// Middleware for parsing JSON and urlencoded form data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/api', api);

// saves files to public folder
app.use(express.static('public'));

// Route for homepage index.html
app.get('/', (req, res) =>
  res.sendFile(path.join(__dirname, '/public/index.html'))
);

// Route for feedback page notes.html
app.get('/notes', (req, res) =>
  res.sendFile(path.join(__dirname, '/public/notes.html'))
);

// listening in on http://localhost:3001
app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT}`)
);