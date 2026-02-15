# Kata 004: Specific vs Vague Prompts
**Module**: Effective Prompting | **Difficulty**: Beginner
**Estimated Time**: 20 minutes
**Source**: [Claude Code Best Practices](https://docs.anthropic.com/en/docs/claude-code/best-practices)

## 🧠 Concept
The quality of Claude Code's output depends heavily on the specificity of your prompts. Vague prompts lead to generic results; specific prompts lead to precisely what you need. This kata gives you side-by-side experience with both approaches.

The official best practices put it simply: "The more precise your instructions, the fewer corrections you'll need." Specific prompts should reference specific files, mention constraints, and point to example patterns.

## ⚙️ Prerequisites
- Completed Kata 003

## 🔄 Warm-Up
From memory: What flag runs Claude Code in one-shot mode? What does `@` do in a prompt? (Answers: `-p`, references a specific file/directory)

## 🏋️ Exercise 1: The Vague vs Specific Test
Run each pair of prompts in Claude Code and compare the results:

**Pair 1 -- Adding a feature:**
- Vague: "Add a search feature to the sample app"
- Specific: "Add a GET /tasks/search?q=term endpoint to sandbox/sample-app/src/routes/tasks.js that filters tasks whose title contains the search term (case-insensitive). Return 400 if q parameter is missing."

Try both. Compare: Which gives you exactly what you wanted on the first try?

**Pair 2 -- Writing tests:**
- Vague: "Write some tests"
- Specific: "Add a test to sandbox/sample-app/tests/tasks.test.js that verifies POST /tasks returns 400 when the title field is missing from the request body"

Try both. Compare: Which one required follow-up questions?

**Pair 3 -- Code review:**
- Vague: "Review the sample app code"
- Specific: "Review sandbox/sample-app/src/routes/tasks.js for error handling issues. Are all error cases returning appropriate HTTP status codes?"

Try both. Compare: Which gave more actionable feedback?

## 🏋️ Exercise 2: The Specificity Formula
The official best practices identify these key strategies for specific prompts:
1. **Scope the task** -- Specify which file, what scenario, and testing preferences
2. **Point to sources** -- Direct Claude to files or history that answer questions
3. **Reference existing patterns** -- Point Claude to patterns already in your codebase
4. **Describe the symptom** -- Provide the symptom, location, and what "fixed" looks like

Practice writing specific prompts. For each task, write a prompt that includes all four elements where applicable, then run it:

Task A: Add input validation for task descriptions (max 200 characters)
Task B: Refactor the tasks routes to return consistent error response format
Task C: Add a middleware that sets CORS headers

## 🏋️ Exercise 3: Showing Not Telling
Sometimes the best prompt includes an example of the output format you want. The best practices call this "referencing existing patterns."

1. Try: "Add JSDoc comments to all functions in sandbox/sample-app/src/utils/validate.js using this format:
   ```javascript
   /**
    * Brief description.
    * @param {type} name - Description
    * @returns {type} Description
    */
   ```"
2. Compare with: "Add documentation to the validate utilities"
3. Notice how the example-based prompt produces consistent formatting

## 🏋️ Exercise 4: Using @ References and Rich Content
The best practices recommend providing rich content instead of describing where things are:

1. Try referencing files directly: "Look at @sandbox/sample-app/src/routes/tasks.js and add proper input validation to all endpoints"
2. Try piping data: Run `cat sandbox/sample-app/package.json | claude -p "What test framework does this project use and how do I run tests?"`
3. Notice how direct references eliminate ambiguity about which files Claude should work with

## 🎯 Challenge
Write the most specific prompt you can for this task: "Add pagination to the GET /tasks endpoint." Include: query parameters, defaults, response format, edge cases, and where to make the change.

## 🪞 Reflection
- What's the minimum specificity needed for a good result?
- When is a vague prompt actually appropriate? (The best practices note: "Vague prompts can be useful when you're exploring and can afford to course-correct.")
- How does specificity affect Claude's need for follow-up questions?

## ✅ Completion Criteria
- [ ] You ran at least two vague vs specific prompt pairs and compared results
- [ ] You wrote a prompt using the specificity strategies from the best practices
- [ ] You used an example in a prompt to guide Claude's output format
- [ ] You used `@` to reference a file directly in a prompt
- [ ] You can articulate when specific vs vague prompts are each appropriate
