const request = require("supertest");
const app = require("../src/index");
const { resetTasks } = require("../src/routes/tasks");

beforeEach(() => {
  resetTasks();
});

describe("GET /health", () => {
  it("returns status ok", async () => {
    const res = await request(app).get("/health");
    expect(res.status).toBe(200);
    expect(res.body.status).toBe("ok");
    expect(res.body).toHaveProperty("uptime");
    expect(res.body).toHaveProperty("timestamp");
  });
});

describe("POST /tasks", () => {
  it("creates a new task with default status", async () => {
    const res = await request(app)
      .post("/tasks")
      .send({ title: "Write tests" });

    expect(res.status).toBe(201);
    expect(res.body.title).toBe("Write tests");
    expect(res.body.status).toBe("pending");
    expect(res.body).toHaveProperty("id");
    expect(res.body).toHaveProperty("createdAt");
  });

  it("creates a task with a specified status", async () => {
    const res = await request(app)
      .post("/tasks")
      .send({ title: "Deploy app", status: "in-progress" });

    expect(res.status).toBe(201);
    expect(res.body.status).toBe("in-progress");
  });

  it("rejects a task with no title", async () => {
    const res = await request(app).post("/tasks").send({});

    expect(res.status).toBe(400);
    expect(res.body.errors).toContain("title is required and must be a string");
  });

  it("rejects a task with an invalid status", async () => {
    const res = await request(app)
      .post("/tasks")
      .send({ title: "Bad task", status: "invalid" });

    expect(res.status).toBe(400);
    expect(res.body.errors.length).toBeGreaterThan(0);
  });
});

describe("GET /tasks", () => {
  it("returns an empty array initially", async () => {
    const res = await request(app).get("/tasks");
    expect(res.status).toBe(200);
    expect(res.body).toEqual([]);
  });

  it("returns all created tasks", async () => {
    await request(app).post("/tasks").send({ title: "Task 1" });
    await request(app).post("/tasks").send({ title: "Task 2" });

    const res = await request(app).get("/tasks");
    expect(res.status).toBe(200);
    expect(res.body).toHaveLength(2);
  });

  it("filters tasks by status", async () => {
    await request(app).post("/tasks").send({ title: "A", status: "pending" });
    await request(app)
      .post("/tasks")
      .send({ title: "B", status: "done" });

    const res = await request(app).get("/tasks?status=done");
    expect(res.status).toBe(200);
    expect(res.body).toHaveLength(1);
    expect(res.body[0].title).toBe("B");
  });
});

describe("GET /tasks/:id", () => {
  it("returns a task by id", async () => {
    const created = await request(app)
      .post("/tasks")
      .send({ title: "Find me" });

    const res = await request(app).get(`/tasks/${created.body.id}`);
    expect(res.status).toBe(200);
    expect(res.body.title).toBe("Find me");
  });

  it("returns 400 for an invalid id", async () => {
    const res = await request(app).get("/tasks/abc");
    expect(res.status).toBe(400);
  });
});

describe("PUT /tasks/:id", () => {
  it("updates a task", async () => {
    const created = await request(app)
      .post("/tasks")
      .send({ title: "Old title" });

    const res = await request(app)
      .put(`/tasks/${created.body.id}`)
      .send({ title: "New title", status: "done" });

    expect(res.status).toBe(200);
    expect(res.body.title).toBe("New title");
    expect(res.body.status).toBe("done");
  });

  it("returns 404 for a non-existent task", async () => {
    const res = await request(app)
      .put("/tasks/999")
      .send({ title: "Ghost" });

    expect(res.status).toBe(404);
  });
});

describe("DELETE /tasks/:id", () => {
  it("deletes a task", async () => {
    const created = await request(app)
      .post("/tasks")
      .send({ title: "Delete me" });

    const res = await request(app).delete(`/tasks/${created.body.id}`);
    expect(res.status).toBe(200);
    expect(res.body.title).toBe("Delete me");

    const listRes = await request(app).get("/tasks");
    expect(listRes.body).toHaveLength(0);
  });

  it("returns 404 for a non-existent task", async () => {
    const res = await request(app).delete("/tasks/999");
    expect(res.status).toBe(404);
  });
});
