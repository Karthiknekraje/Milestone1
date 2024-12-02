// src/routes/expensesRoutes.js

const express = require('express');
const router = express.Router();

// Add your route handlers
router.post('/', (req, res) => {
    res.send('Add expense');
});

router.get('/', (req, res) => {
    res.send('Get expenses');
});

module.exports = router;
