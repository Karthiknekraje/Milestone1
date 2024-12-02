// src/index.js

const app = require('./app'); // Import the app instance from app.js
const PORT = process.env.PORT || 3000;

// Import routes
const expensesRoute = require('./routes/expensesRoute');
app.use('/expenses', expensesRoute);

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
