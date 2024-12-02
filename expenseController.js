const expenses = []; // In-memory storage

// Add a new expense
exports.addExpense = (req, res) => {
  const { category, amount, date } = req.body;
  const newExpense = { id: expenses.length + 1, category, amount, date };

  expenses.push(newExpense);
  res.status(201).json({ status: 'success', data: newExpense });
};

// Get expenses (with optional filters)
exports.getExpenses = (req, res) => {
  const { category, startDate, endDate } = req.query;
  let filteredExpenses = expenses;

  if (category) filteredExpenses = filteredExpenses.filter(e => e.category === category);
  if (startDate) filteredExpenses = filteredExpenses.filter(e => new Date(e.date) >= new Date(startDate));
  if (endDate) filteredExpenses = filteredExpenses.filter(e => new Date(e.date) <= new Date(endDate));

  res.json({ status: 'success', data: filteredExpenses });
};
