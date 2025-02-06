# AI-based Calculator

An AI-based Calculator app that interprets natural language queries for arithmetic expressions. This simple Node.js application uses Express for the backend and Math.js for safely evaluating arithmetic expressions extracted from natural language queries.

## Features

- **Natural Language Interpretation**: Extract and calculate arithmetic expressions from user queries (e.g., "What is 10 + 5?").
- **Express.js Server**: Handles API requests and serves static files.
- **Math.js**: Performs safe arithmetic expression evaluation.
- **Simple UI**: A minimalistic HTML/CSS/JavaScript interface for easy use.

## Folder Structure

```plaintext
ai-calculator/
├── package.json        # Project metadata and dependencies
├── server.js           # Node.js server with Express and calculation logic
└── public/
    ├── index.html      # Web user interface
    ├── script.js       # Client-side JavaScript to interact with the server
    └── styles.css      # CSS styles for the UI
