# Kata 004: Specific vs Vague Prompts
**Module**: Effective Prompting | **Difficulty**: Beginner
**Estimated Time**: 20 minutes
**Source**: [Claude Code Best Practices](https://docs.anthropic.com/en/docs/claude-code/best-practices)

## Concept
The quality of Claude Code's output depends heavily on the specificity of your prompts. Vague prompts lead to generic results; specific prompts lead to precisely what you need. This kata gives you side-by-side experience with both approaches.

## Prerequisites
- Completed Kata 003

## Warm-Up
From memory: What flag runs Claude Code in one-shot mode? What flag continues your most recent conversation? (Answers: `-p`, `-c`)

## Exercise 1: The Vague vs Specific Test
Run each prompt below **in a regular terminal outside this Claude Code session** using one-shot mode, so they don't influence each other. Compare the results side by side.

**Vague version:**
```bash
claude -p "Add a search feature to the sample app"
```

**Specific version:**
```bash
claude -p "Add a GET /tasks/search?q=term endpoint to sandbox/sample-app/src/routes/tasks.js that filters tasks whose title contains the search term (case-insensitive). Return 400 if q parameter is missing."
```

Which gave you what you wanted on the first try? Which required you to guess what Claude would do?

## Exercise 2: Another Pair — Writing Tests
Try the same comparison with test-writing prompts in a regular terminal:

**Vague:**
```bash
claude -p "Write some tests for the sample app"
```

**Specific:**
```bash
claude -p "Add a test to sandbox/sample-app/tests/tasks.test.js that verifies POST /tasks returns 400 when the title field is missing from the request body"
```

Which one required follow-up? Which was ready to use as-is?

## Exercise 3: The Specificity Formula
The official best practices identify these strategies for specific prompts:
1. **Scope the task** — which file, what scenario
2. **Point to sources** — direct Claude to files that answer its questions
3. **Reference existing patterns** — point to patterns already in your codebase
4. **Describe the symptom** — the symptom, location, and what "fixed" looks like

Pick one of these tasks and write a prompt using those strategies, then run it right here:

- Add input validation for task descriptions (max 200 characters)
- Add a middleware that sets CORS headers

## Exercise 4: Show, Don't Tell
Sometimes the best prompt includes an example of the output format you want.

Try this:

"Add JSDoc comments to all functions in sandbox/sample-app/src/utils/validate.js using this format:
```javascript
/**
 * Brief description.
 * @param {type} name - Description
 * @returns {type} Description
 */
```"

Compare with what you'd get from: "Add documentation to the validate utilities"

## Challenge
Write the most specific prompt you can for this task: "Add pagination to the GET /tasks endpoint." Include: query parameters, defaults, response format, edge cases, and where to make the change.

## Reflection
- What's the minimum specificity needed for a good result?
- When is a vague prompt actually appropriate? (Hint: exploration and brainstorming)
- How does specificity affect Claude's need for follow-up questions?

## Completion Criteria
- [ ] You ran at least one vague vs specific prompt pair and compared results
- [ ] You wrote a prompt using the specificity strategies from the best practices
- [ ] You used an example in a prompt to guide Claude's output format
- [ ] You can articulate when specific vs vague prompts are each appropriate
