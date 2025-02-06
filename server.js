const express = require('express');
const path = require('path');
const { evaluate } = require('mathjs');

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

/**
 * Simulate an AI-based interpretation:
 * This function extracts a potential mathematical expression from a natural language query.
 * It supports basic arithmetic operators and parentheses.
 */
function extractExpression(query) {
  // The regular expression below is a very naive approach,
  // It extracts any substring that contains numbers, spaces, and basic math operators.
  // Improve the implementation if more complex query parsing is needed.
  const match = query.match(/[\d+\-*/().\s]+/);
  if (match) {
    return match[0];
  }
  return null;
}

app.post('/api/calculate', (req, res) => {
  const { query } = req.body;
  if (!query) {
    return res.status(400).json({ error: 'No query provided' });
  }

  // Use our simple AI simulation to get a math expression.
  const expression = extractExpression(query);
  if (!expression) {
    return res.status(400).json({ error: 'Could not interpret the query. Please try a different phrasing.' });
  }
  
  try {
    // Evaluate the arithmetic expression using math.js for safety
    const result = evaluate(expression);
    res.json({ expression: expression.trim(), result });
  } catch (err) {
    res.status(400).json({ error: 'Invalid expression or unable to evaluate.' });
  }
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});