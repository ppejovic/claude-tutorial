const { validateTask, isValidId } = require("../src/utils/validate");

describe("validateTask", () => {
  it("accepts a valid task with title only", () => {
    const result = validateTask({ title: "Buy groceries" });
    expect(result.valid).toBe(true);
    expect(result.errors).toHaveLength(0);
  });

  it("accepts a valid task with title and status", () => {
    const result = validateTask({ title: "Cook dinner", status: "in-progress" });
    expect(result.valid).toBe(true);
  });

  it("rejects null input", () => {
    const result = validateTask(null);
    expect(result.valid).toBe(false);
    expect(result.errors).toContain("Request body must be a JSON object");
  });

  it("rejects missing title", () => {
    const result = validateTask({});
    expect(result.valid).toBe(false);
    expect(result.errors).toContain("title is required and must be a string");
  });

  it("rejects empty title", () => {
    const result = validateTask({ title: "   " });
    expect(result.valid).toBe(false);
    expect(result.errors).toContain("title must not be empty");
  });

  it("rejects a title that is too long", () => {
    const result = validateTask({ title: "x".repeat(201) });
    expect(result.valid).toBe(false);
    expect(result.errors).toContain("title must be 200 characters or fewer");
  });

  it("rejects an invalid status", () => {
    const result = validateTask({ title: "Task", status: "unknown" });
    expect(result.valid).toBe(false);
    expect(result.errors[0]).toMatch(/status must be one of/);
  });

  it("accepts all valid statuses", () => {
    for (const status of ["pending", "in-progress", "done"]) {
      const result = validateTask({ title: "Task", status });
      expect(result.valid).toBe(true);
    }
  });
});

describe("isValidId", () => {
  it("accepts positive integers", () => {
    expect(isValidId(1)).toBe(true);
    expect(isValidId(42)).toBe(true);
  });

  it("accepts string representations of positive integers", () => {
    expect(isValidId("1")).toBe(true);
    expect(isValidId("100")).toBe(true);
  });

  it("rejects zero", () => {
    expect(isValidId(0)).toBe(false);
  });

  it("rejects negative numbers", () => {
    expect(isValidId(-1)).toBe(false);
  });

  it("rejects non-numeric strings", () => {
    expect(isValidId("abc")).toBe(false);
  });

  it("rejects floats", () => {
    expect(isValidId(1.5)).toBe(false);
  });
});
