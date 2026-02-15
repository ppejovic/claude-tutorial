const express = require("express");
const router = express.Router();
const { validateTask, isValidId } = require("../utils/validate");

// In-memory task store
let tasks = [];
let nextId = 1;

// GET /tasks - list all tasks
router.get("/", (req, res) => {
  const { status } = req.query;

  if (status) {
    const filtered = tasks.filter((t) => t.status === status);
    return res.json(filtered);
  }

  res.json(tasks);
});

// GET /tasks/:id - get a single task
router.get("/:id", (req, res) => {
  if (!isValidId(req.params.id)) {
    return res.status(400).json({ error: "Invalid task ID" });
  }

  const task = tasks.find((t) => t.id === Number(req.params.id));

  // BUG: intentional for kata exercise
  // Should return 404 when task is not found, but returns 200 with undefined instead
  res.json(task);
});

// POST /tasks - create a new task
router.post("/", (req, res) => {
  const { valid, errors } = validateTask(req.body);

  if (!valid) {
    return res.status(400).json({ errors });
  }

  const task = {
    id: nextId++,
    title: req.body.title.trim(),
    status: req.body.status || "pending",
    createdAt: new Date().toISOString(),
  };

  tasks.push(task);
  res.status(201).json(task);
});

// PUT /tasks/:id - update a task
router.put("/:id", (req, res) => {
  if (!isValidId(req.params.id)) {
    return res.status(400).json({ error: "Invalid task ID" });
  }

  const index = tasks.findIndex((t) => t.id === Number(req.params.id));

  if (index === -1) {
    return res.status(404).json({ error: "Task not found" });
  }

  const { valid, errors } = validateTask(req.body);

  if (!valid) {
    return res.status(400).json({ errors });
  }

  tasks[index] = {
    ...tasks[index],
    title: req.body.title.trim(),
    status: req.body.status || tasks[index].status,
  };

  res.json(tasks[index]);
});

// DELETE /tasks/:id - delete a task
router.delete("/:id", (req, res) => {
  if (!isValidId(req.params.id)) {
    return res.status(400).json({ error: "Invalid task ID" });
  }

  const index = tasks.findIndex((t) => t.id === Number(req.params.id));

  if (index === -1) {
    return res.status(404).json({ error: "Task not found" });
  }

  const deleted = tasks.splice(index, 1);
  res.json(deleted[0]);
});

// Helper for tests: reset the in-memory store
function resetTasks() {
  tasks = [];
  nextId = 1;
}

module.exports = router;
module.exports.resetTasks = resetTasks;
