# Kata 009: Good vs Bad CLAUDE.md
**Module**: Memory & Context | **Difficulty**: Intermediate
**Estimated Time**: 20 minutes
**Source**: [Memory Documentation](https://code.claude.com/docs/en/memory)

## Concept
Not all CLAUDE.md files are created equal. A vague, generic CLAUDE.md is barely better than none. A well-crafted one dramatically improves Claude's output. The official docs emphasize: "Be specific: 'Use 2-space indentation' is better than 'Format code properly.'" This kata gives you hands-on experience seeing the difference.

## Prerequisites
- Completed Kata 008

## Warm-Up
From memory: What are the main memory types in Claude Code's hierarchy? (Answer: user memory, project memory, project rules, project local memory, auto memory)

## Exercise 1: Compare Side by Side
This repo includes two comparison projects in sandbox/claude-md-comparison/:
- **bad/** -- Has a vague, unhelpful CLAUDE.md
- **good/** -- Has a well-crafted CLAUDE.md

1. First, read both CLAUDE.md files:
   ```
   Show me the CLAUDE.md files in sandbox/claude-md-comparison/bad/ and sandbox/claude-md-comparison/good/
   ```
2. Compare: What specific information does the good version have that the bad one lacks?

## Exercise 2: The Same Task, Two Results
Run the exact same task in both projects and compare:

**Task: "Add a new function called `reverse` that reverses a string"**

**Run these commands in a separate terminal** (they use `claude -p` one-shot mode, which must run outside your current Claude Code session). The `cd` is needed so Claude reads the CLAUDE.md in each directory:

1. Start in the bad/ directory:
   ```bash
   cd sandbox/claude-md-comparison/bad && claude -p "Add a reverse function to this project that reverses a string. Show me the code you would write."
   ```
2. Now in the good/ directory:
   ```bash
   cd sandbox/claude-md-comparison/good && claude -p "Add a reverse function to this project that reverses a string. Show me the code you would write."
   ```
3. Compare the outputs:
   - Does the good version follow specific style conventions?
   - Does it include JSDoc comments?
   - Does it add tests automatically?
   - Does it follow the project's architecture?

## Exercise 3: Test-Writing Comparison
**Task: "Write tests for the slugify function"**

Run in both directories. The good CLAUDE.md specifies test conventions (empty string, null/undefined cases). Compare:
- Does the bad version miss edge cases?
- Does the good version test all three categories (normal, empty, edge)?

## Exercise 4: Write Your Own Good CLAUDE.md
Based on what you've learned, write a CLAUDE.md from scratch for a real project you work on (or an imaginary one). The official docs recommend including:
1. **Project description** (2-3 sentences)
2. **Key commands** (build, test, lint) -- "Include frequently used commands to avoid repeated searches"
3. **Code style rules** (specific, not generic) -- "Document code style preferences and naming conventions"
4. **Architecture overview** (where things go) -- "Add important architectural patterns specific to your project"
5. **Common patterns** (how to add new features)

Save it to sandbox/my-claude-md-draft.md for reference.

## What Makes a Good CLAUDE.md
The official best practices boil down to:
- **Specific** over generic ("use camelCase for variables" vs "write clean code")
- **Actionable** -- Claude can follow the instructions directly
- **Scoped** -- relevant to the project, not general programming advice
- **Concise** -- key conventions, not an essay (Claude reads it every session)
- **Structured** -- use bullet points and group related info under descriptive markdown headings

## Challenge
Take the bad CLAUDE.md and rewrite it to be good -- without looking at the good example. Then compare your version with the provided good one. What did you include that it didn't, and vice versa?

## Reflection
- What's the most impactful single section in a CLAUDE.md?
- How do you decide between putting something in CLAUDE.md vs in the prompt?
- How would you onboard a teammate to write good CLAUDE.md files?

## Completion Criteria
- [ ] You compared the bad and good CLAUDE.md files
- [ ] You ran the same task in both projects and observed different outputs
- [ ] You can list at least 3 specific differences between good and bad CLAUDE.md
- [ ] You wrote (or outlined) your own CLAUDE.md for a real or imaginary project
