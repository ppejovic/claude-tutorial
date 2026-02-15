# Task Manager Sample App

A minimal Express.js REST API for managing tasks, built as a practice codebase for the Claude Code tutorial course.

## Quick start

```bash
npm install
npm start       # starts on port 3000
npm test        # runs Jest test suite
```

## API endpoints

| Method | Path          | Description          |
|--------|---------------|----------------------|
| GET    | /health       | Health check         |
| GET    | /tasks        | List all tasks       |
| GET    | /tasks/:id    | Get a task by ID     |
| POST   | /tasks        | Create a new task    |
| PUT    | /tasks/:id    | Update a task        |
| DELETE | /tasks/:id    | Delete a task        |

Tasks are stored in memory and reset when the server restarts.
