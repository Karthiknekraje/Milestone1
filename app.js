// src/app.js

const express = require('express');
const app = express(); // Initialize express app

app.use(express.json()); // Middleware to parse JSON

module.exports = app; // Export the app instance
