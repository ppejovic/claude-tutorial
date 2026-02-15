# Kata 007: Your First CLAUDE.md
**Module**: Memory & Context | **Difficulty**: Beginner
**Estimated Time**: 15 minutes
**Source**: [Memory Documentation](https://code.claude.com/docs/en/memory)

## Concept
CLAUDE.md is a special file that Claude Code reads at the start of every session. It is like a persistent briefing -- project conventions, architecture notes, and instructions that shape Claude's behavior. Think of it as a README specifically for Claude. The official docs describe it as "markdown files you write and maintain with instructions, rules, and preferences for Claude to follow."

## Prerequisites
- Completed Kata 006

## Warm-Up
From memory: What is the interview technique from Kata 006? When would you use it instead of writing a detailed prompt? (Answer: ask Claude to interview you about requirements before implementing; use it when you're not sure about the best approach)

## Exercise 1: Create a Project CLAUDE.md
1. Ask Claude to create a CLAUDE.md in the sandbox/sample-app/ directory:
   ```
   Create a CLAUDE.md for sandbox/sample-app/ that includes:
   - Project description (Express.js task manager API)
   - How to run tests (npm test)
   - Code style: use const over let, descriptive variable names, always handle errors
   - Architecture: routes in src/routes/, utilities in src/utils/
   ```
2. Review what Claude created. Does it match your requirements?

## Exercise 2: See CLAUDE.md in Action
1. Clear your context with `/clear` so Claude re-reads CLAUDE.md fresh
2. Ask Claude: "Add a new utility function to the sample app that formats dates"
3. Observe: Does Claude follow the conventions from your CLAUDE.md?
   - Does it put the file in src/utils/?
   - Does it use const?
   - Does it use descriptive variable names?
4. Run `/kata` to continue.

## Exercise 3: Modify and Test
1. Add a new rule to your CLAUDE.md:
   ```
   ## Error Responses
   All error responses must use this format: { "error": true, "message": "description" }
   ```
2. Run `/clear`, then ask Claude to add error handling to the tasks route
3. Check: Does it use your specified error format?
4. Run `/kata` to continue.

## Exercise 4: What NOT to Put in CLAUDE.md
CLAUDE.md should contain stable, project-wide information. The official docs recommend being specific ("Use 2-space indentation" is better than "Format code properly") and reviewing periodically as your project evolves.

Avoid putting these in CLAUDE.md:
- Session-specific instructions (use the prompt for those)
- Frequently changing data (dates, version numbers that change often)
- Extremely long content (keep it focused -- Claude reads it every session)

Review your CLAUDE.md. Is everything in it something you would want Claude to know in every single session?

## Challenge
Delete the CLAUDE.md from sandbox/sample-app/, clear the session, and ask Claude to make a change. Compare Claude's output with and without CLAUDE.md. How does it differ?

## Reflection
- How does CLAUDE.md change Claude's behavior compared to no CLAUDE.md?
- What are the most important things to include in a project CLAUDE.md?
- How is CLAUDE.md different from README.md?

## Completion Criteria
- [ ] You created a CLAUDE.md in sandbox/sample-app/
- [ ] You observed Claude following CLAUDE.md conventions in its output
- [ ] You added a rule and confirmed Claude respected it
- [ ] You understand what belongs in CLAUDE.md vs what does not
