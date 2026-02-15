# Kata 002: Navigation & Discovery
**Module**: Foundations | **Difficulty**: Beginner
**Estimated Time**: 15 minutes
**Source**: [Claude Code Overview](https://code.claude.com/docs/en/overview)

## Concept
Claude Code can explore and understand codebases without you pointing it to specific files. You'll learn how to guide its exploration effectively and use @ references to point Claude at specific files, directories, or URLs.

## Prerequisites
- Completed Kata 001

## Warm-Up
Start a Claude Code session and ask: "How many JavaScript files are in this repo?" (Recall from Kata 001: Claude uses tools automatically to find this out.)

## Exercise 1: Broad Exploration
1. Ask Claude: "Give me a high-level overview of the sandbox/sample-app project -- its purpose, structure, and key endpoints"
2. Observe how Claude reads multiple files to piece together an understanding
3. Notice: it doesn't just read one file; it follows imports and references

## Exercise 2: Targeted Navigation with @
1. Try using @ references to point Claude at specific context:
   - `@sandbox/sample-app/src/routes/tasks.js explain this file`
   - `@sandbox/sample-app/tests/ what do these tests cover?`
2. Notice how @ gives Claude explicit context, reducing guesswork
3. Try: `@package.json what dependencies does the sample app use?` -- This points to the root package.json. Be specific: `@sandbox/sample-app/package.json what dependencies does this use?`

## Exercise 3: Finding Things
1. Ask Claude: "Find all the route handler files in the sample app"
2. Ask Claude: "Where is input validation done in the sample app?"
3. Ask Claude: "What middleware does the sample app use?"
4. Compare: Claude uses Glob (file pattern search) and Grep (content search) depending on the question

## Exercise 4: Understanding Connections
1. Ask Claude: "Trace the flow of a POST request to /tasks -- from entry point to response"
2. This requires Claude to follow the code across multiple files
3. Observe how it connects index.js to routes to middleware to validation

## Challenge
Ask Claude: "Is there a bug in the sample app?" Don't give it any hints. See if it can find the intentional bug through exploration alone.

## Reflection
- When is it better to use @ references vs letting Claude explore on its own?
- How does Claude decide which files to read when exploring?
- What's the difference between Glob (file pattern search) and Grep (content search)?

## Completion Criteria
- [ ] You asked Claude to explore a project and it read multiple files
- [ ] You used @ references to point Claude at specific files and directories
- [ ] You asked Claude to find something in the codebase (routes, middleware, etc.)
- [ ] You asked Claude to trace a code flow across multiple files
