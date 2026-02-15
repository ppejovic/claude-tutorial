// Sample Express app for Claude Code Katas
const express = require("express");
const requestLogger = require("./middleware/logger");
const healthRouter = require("./routes/health");
const tasksRouter = require("./routes/tasks");

const app = express();

// Middleware
app.use(express.json());
app.use(requestLogger);

// Routes
app.use("/health", healthRouter);
app.use("/tasks", tasksRouter);

// 404 handler
app.use((req, res) => {
  res.status(404).json({ error: "Not found" });
});

// Error handler
app.use((err, req, res, _next) => {
  console.error(err.stack);
  res.status(500).json({ error: "Internal server error" });
});

// Only start listening when run directly (not during tests)
if (require.main === module) {
  const PORT = process.env.PORT || 3000;
  app.listen(PORT, () => {
    console.log(`Task manager API listening on port ${PORT}`);
  });
}

module.exports = app;
