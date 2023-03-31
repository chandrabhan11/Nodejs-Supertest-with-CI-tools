const express = require('express');
const bodyParser = require('body-parser');

// Set up the express app
const app = express();
const router = require('./src/router');

/* 
  Connect to MongoDB 
  (In this test repo we use dummydata JSON, you can configure your DB instead)
*/
// const mongoose = require('mongoose');
// mongoose.connect('mongodb://localhost/nodejs_api', { useNewUrlParser: true });

// Use body-parser middleware
app.use(bodyParser.json());

// configure route
router(app);

// Start the server
app.listen(3000, () => {
    console.log('Server started on port 3000');
});

module.exports = app;
