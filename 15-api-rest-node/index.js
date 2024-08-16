const {connection} = require('./database/connection');
const express = require('express');
const cors = require('cors');

console.log("Node App Started");

connection();

// Create Node Server
const app = express();

// Setup Cors
app.use(cors());

// Convert body to JSON
app.use(express.json())

// Import Models


// Setup Routes
const indexRouter = require('./routes/index');
const articleRouter = require('./routes/articles');
app.use(indexRouter);
app.use('/articles', articleRouter);


// Create server and listen requests
app.listen(80);