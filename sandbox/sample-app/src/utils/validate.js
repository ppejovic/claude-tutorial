/**
 * Validates that a task object has the required fields.
 * Returns an object with `valid` (boolean) and `errors` (array of strings).
 */
function validateTask(task) {
  const errors = [];

  if (!task || typeof task !== "object") {
    return { valid: false, errors: ["Request body must be a JSON object"] };
  }

  if (!task.title || typeof task.title !== "string") {
    errors.push("title is required and must be a string");
  } else if (task.title.trim().length === 0) {
    errors.push("title must not be empty");
  } else if (task.title.length > 200) {
    errors.push("title must be 200 characters or fewer");
  }

  if (task.status !== undefined) {
    const allowedStatuses = ["pending", "in-progress", "done"];
    if (!allowedStatuses.includes(task.status)) {
      errors.push(`status must be one of: ${allowedStatuses.join(", ")}`);
    }
  }

  return { valid: errors.length === 0, errors };
}

/**
 * Checks whether a value is a positive integer (or a string representation of one).
 */
function isValidId(value) {
  const num = Number(value);
  return Number.isInteger(num) && num > 0;
}

module.exports = { validateTask, isValidId };
