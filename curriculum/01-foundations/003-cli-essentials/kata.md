# Kata 003: CLI Essentials
**Module**: Foundations | **Difficulty**: Beginner
**Estimated Time**: 20 minutes
**Source**: [CLI Reference](https://code.claude.com/docs/en/cli-reference)

## Concept
Claude Code has powerful CLI options beyond the basic interactive session. You'll learn key flags for non-interactive use, output control, and session management. These are building blocks for automation and integration.

## Prerequisites
- Completed Kata 002

## Warm-Up
From memory: What command starts Claude Code? What does `/clear` do? How do you cancel a response in progress? (Answers: `claude`, clears conversation context, press Escape)

## Exercise 1: One-Shot Mode (-p)
The `-p` (print) flag sends a single prompt and exits without entering interactive mode.

1. Try it (run these in your regular terminal, not inside Claude Code):
   ```bash
   claude -p "List all JavaScript files in sandbox/sample-app/src/"
   ```
2. Notice: it runs, outputs the response, and exits -- no interactive session
3. Try piping input:
   ```bash
   cat sandbox/sample-app/src/routes/tasks.js | claude -p "Review this code for bugs"
   ```
4. This is powerful for scripting and CI/CD pipelines

## Exercise 2: Output Formats
1. Default output is text. Try JSON:
   ```bash
   claude -p "What are the Express routes in sandbox/sample-app?" --output-format json
   ```
2. Try streaming JSON (useful for real-time processing):
   ```bash
   claude -p "Explain the sample app" --output-format stream-json
   ```
3. Compare the outputs -- JSON mode returns structured data with metadata

## Exercise 3: Continue and Resume
1. Start an interactive session and ask Claude something about the sample app
2. Exit the session (Ctrl+C or type `exit`)
3. Continue the most recent conversation in the current directory:
   ```bash
   claude -c
   ```
4. Your previous conversation context is back! Ask a follow-up question.
5. Now try resuming a specific session with the interactive picker:
   ```bash
   claude -r
   ```
   This shows a session picker so you can choose which conversation to continue.

## Exercise 4: System Prompts
1. Append to the default system prompt to shape behavior while keeping Claude Code's built-in capabilities:
   ```bash
   claude -p "Review sandbox/sample-app/src/index.js" --append-system-prompt "Be extremely brief. One sentence max."
   ```
2. Or replace the entire system prompt for full control:
   ```bash
   claude -p "What does this app do?" --system-prompt "You are a pirate who reviews code. Reply in pirate speak."
   ```
3. Combine flags:
   ```bash
   claude -p "What does this app do?" --append-system-prompt "Reply in exactly 3 bullet points" --output-format json
   ```

## Exercise 5: Piping and Chaining
1. Use Claude in a pipeline:
   ```bash
   claude -p "Generate a curl command to test the POST /tasks endpoint of an Express app running on port 3000" | bash
   ```
   (Don't actually run this unless the sample app is running -- it's to show the concept)
2. Process file listings:
   ```bash
   ls sandbox/sample-app/src/**/*.js | claude -p "Which of these files likely handles HTTP routing?"
   ```
3. Pipe git output for analysis:
   ```bash
   git diff main --name-only | claude -p "Summarize what areas of the codebase these changes affect"
   ```

## Challenge
Write a one-liner that uses Claude to generate a summary of all JavaScript files in the sample app and saves it to `sandbox/app-summary.txt`:
```bash
claude -p "Summarize each JS file in sandbox/sample-app/src/ in one line each" > sandbox/app-summary.txt
```

## Reflection
- When would you use `-p` (one-shot) vs interactive mode?
- How could `-c` (continue) and `-r` (resume) help your daily workflow?
- What use cases can you think of for piping data through Claude?

## Completion Criteria
- [ ] You ran Claude in one-shot mode with `-p`
- [ ] You piped content into Claude from the command line
- [ ] You used `-c` to continue a previous session
- [ ] You tried at least one output format flag
- [ ] You understand the difference between interactive and non-interactive modes
