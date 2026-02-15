# Kata 005: Verification-Driven Development
**Module**: Effective Prompting | **Difficulty**: Intermediate
**Estimated Time**: 20 minutes
**Source**: [Claude Code Best Practices](https://docs.anthropic.com/en/docs/claude-code/best-practices)

## Concept
The official best practices call this "the single highest-leverage thing you can do": give Claude a way to verify its own work. When you provide tests, type checks, or linting rules, Claude can iterate until the code is correct -- not just plausible. Without clear success criteria, Claude might produce something that looks right but does not actually work, and you become the only feedback loop.

This is "verification-driven development": define the success criteria first, then let Claude work toward them.

## Prerequisites
- Completed Kata 004
- sandbox/sample-app has npm dependencies installed (`cd sandbox/sample-app && npm install`)

## Warm-Up
Write a specific prompt (Kata 004 style) for: "Add a DELETE /tasks/:id endpoint." Include what success looks like.

## Exercise 1: Tests First, Then Implementation
The best practices show a clear pattern: provide test cases and tell Claude to run them after implementing.

1. First, write a test (or ask Claude to write just the test):
   ```
   Add a test to sandbox/sample-app/tests/tasks.test.js for a PATCH /tasks/:id endpoint that updates a task's title. Test cases: successful update returns 200, missing task returns 404, missing title returns 400.
   ```
2. Run the tests -- they should fail (the endpoint does not exist yet). **Run this in your terminal, not as a Claude Code prompt** (or ask Claude to run the tests for you):
   ```bash
   cd sandbox/sample-app && npm test
   ```
3. Now ask Claude to make them pass:
   ```
   The PATCH /tasks/:id tests are failing. Implement the endpoint in sandbox/sample-app/src/routes/tasks.js to make all tests pass. Run the tests to confirm.
   ```
4. Key insight: Claude will run the tests itself, see failures, and iterate until they pass.

## Exercise 2: Linting as Verification
The best practices note that verification can be "a test suite, a linter, or a Bash command that checks output."

1. Ask Claude:
   ```
   Add an ESLint config to sandbox/sample-app/ with these rules: no-unused-vars (error), no-console (warn), eqeqeq (error). Then fix any violations in src/routes/tasks.js. Run the linter to verify all issues are resolved.
   ```
2. Observe: Claude will set up ESLint, run it, see violations, and fix them in a loop.
3. The linter serves as automated verification -- Claude keeps fixing until clean.

## Exercise 3: The "Verify Yourself" Pattern
The best practices show this pattern in their before/after table: always end with "run the tests after implementing."

1. Try this prompt pattern:
   ```
   Add input length validation to POST /tasks -- title must be 1-100 characters, description must be under 500 characters. After implementing, run the tests to make sure nothing is broken. If tests fail, fix the issues.
   ```
2. The key phrase is: **"run the tests to make sure nothing is broken. If tests fail, fix the issues."**
3. This tells Claude to self-verify. Without it, Claude would implement and stop.
4. Compare with: "Add input length validation to POST /tasks." Notice the difference in behavior.

## Exercise 4: Defining Acceptance Criteria
For complex tasks, list explicit criteria. Each one should be testable so Claude can verify it:

```
Implement rate limiting middleware for the sample app. Requirements:
- Maximum 100 requests per minute per IP
- Returns 429 Too Many Requests when exceeded
- Adds X-RateLimit-Remaining header to all responses
- Write tests that verify all three behaviors
- All existing tests must still pass
- Run the full test suite to confirm everything works
```

Notice how each criterion is testable. Claude can verify each one.

## Exercise 5: Addressing Root Causes
The best practices warn against the "trust-then-verify gap" -- Claude produces plausible code that does not handle edge cases. They also advise: "address the root cause, don't suppress the error."

Try this pattern:
```
The POST /tasks endpoint accepts empty strings for the title field. Fix this so that empty or whitespace-only titles are rejected with a 400 status. Write a test that reproduces the issue first, then fix it. Run tests to verify the fix doesn't break anything else.
```

This follows the best practice: reproduce the issue with a test, fix the root cause, verify everything still works.

## Challenge
Give Claude a task with deliberately conflicting requirements and see how it handles it:
```
Add a PUT /tasks/:id endpoint that replaces a task entirely. It must accept the same fields as POST. All existing tests must pass. The endpoint should return 200 on success and 404 if the task doesn't exist. Write tests and run them to verify.
```
If existing tests assume certain behavior, Claude may need to reconcile conflicts. Watch how it reasons about this.

## Reflection
- How does providing verification change Claude's behavior?
- What kinds of verification work best? (tests, linting, type checking, bash commands)
- The best practices say: "If you can't verify it, don't ship it." How does this change your workflow?

## Completion Criteria
- [ ] You wrote tests before implementation and had Claude make them pass
- [ ] You observed Claude running tests and iterating on failures
- [ ] You used the "verify yourself" prompt pattern with the key phrase
- [ ] You provided explicit acceptance criteria for a task
- [ ] Tests in sandbox/sample-app are passing
