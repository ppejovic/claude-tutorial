# Kata 010: Modular Rules
**Module**: Memory & Context | **Difficulty**: Intermediate
**Estimated Time**: 15 minutes
**Source**: [Memory Documentation](https://code.claude.com/docs/en/memory)

## 🧠 Concept
For larger projects, a single CLAUDE.md can become unwieldy. Claude Code supports modular rules: individual rule files in a `.claude/rules/` directory. The official docs explain: "This allows teams to maintain focused, well-organized rule files instead of one large CLAUDE.md." These files can include YAML frontmatter with a `paths` field to scope rules to specific file patterns -- so your testing conventions only apply when Claude works on tests, and your API conventions only apply to API files.

## ⚙️ Prerequisites
- Completed Kata 009

## 🔄 Warm-Up
Where would you put a CLAUDE.md that only applies to test files? (Kata 008 answer: in the tests/ directory. But this kata shows a more flexible approach using `.claude/rules/`.)

## 🏋️ Exercise 1: Create Your First Rule File
1. Create the rules directory and a rule file in the sandbox project:
   ```
   Create sandbox/sample-app/.claude/rules/testing.md with this content:

   ---
   paths:
     - "tests/**/*.test.js"
   ---

   # Testing Rules
   - Use describe/it pattern, not standalone test()
   - Each describe block should match a route or function
   - Include setup/teardown in beforeEach/afterEach
   - Test both happy path and error cases
   - Use meaningful test descriptions that read like sentences
   ```
2. Notice the YAML frontmatter with `paths:` -- this rule only applies when Claude is working on files matching that pattern. Rules without a `paths` field are loaded unconditionally and apply to all files.

## 🏋️ Exercise 2: Path-Specific Rules
Create rules for different parts of the sample app:

1. API routes rule:
   ```
   Create sandbox/sample-app/.claude/rules/routes.md:
   ---
   paths:
     - "src/routes/**/*.js"
   ---
   # Route Handler Rules
   - Always validate input before processing
   - Return consistent error format: { error: true, message: "..." }
   - Use appropriate HTTP status codes
   - Add route to the router with descriptive comments
   ```

2. Utilities rule:
   ```
   Create sandbox/sample-app/.claude/rules/utils.md:
   ---
   paths:
     - "src/utils/**/*.js"
   ---
   # Utility Function Rules
   - Pure functions only -- no side effects
   - Add JSDoc with @param and @returns
   - Export individually, not as default
   ```

## 🏋️ Exercise 3: See Rules in Action
1. Ask Claude to modify a test file -- it should follow testing.md rules
2. Ask Claude to modify a route file -- it should follow routes.md rules
3. Ask Claude to modify a utility -- it should follow utils.md rules
4. Ask Claude to modify the main index.js -- none of the path-specific rules apply (only general CLAUDE.md)

## 🏋️ Exercise 4: Multiple Path Patterns
Rules can match multiple patterns using YAML arrays and brace expansion:

```markdown
---
paths:
  - "src/**/*.{ts,tsx}"
  - "{src,lib}/**/*.ts"
---
```

Create a rule that applies to both JavaScript and potential TypeScript files:
```
Create sandbox/sample-app/.claude/rules/style.md:
---
paths:
  - "**/*.js"
  - "**/*.ts"
---
# Code Style
- Prefer const, then let, never var
- Use template literals over string concatenation
- Destructure objects and arrays when accessing multiple properties
```

## 🏋️ Exercise 5: Organizing Rules with Subdirectories
The docs note that rules can be organized into subdirectories -- all `.md` files are discovered recursively:

```
.claude/rules/
├── frontend/
│   ├── react.md
│   └── styles.md
├── backend/
│   ├── api.md
│   └── database.md
└── general.md
```

Consider how you would organize rules for a project with both frontend and backend code. What groupings make sense?

## ⚡ Best Practices from the Docs
- **Keep rules focused**: Each file should cover one topic
- **Use descriptive filenames**: The filename should indicate what the rules cover
- **Use conditional rules sparingly**: Only add `paths` when rules truly are path-specific
- **Organize with subdirectories**: Group related rules

## 🎯 Challenge
The docs also support user-level rules at `~/.claude/rules/`. These apply to all your projects and are loaded before project rules (project rules take higher priority). Create a personal rule:
```markdown
# ~/.claude/rules/preferences.md
# My Coding Preferences
- Always add comments explaining "why", not "what"
- Prefer early returns over nested conditionals
```
Verify that this applies across projects but project rules take precedence.

## 🪞 Reflection
- When would you use .claude/rules/ vs a directory-level CLAUDE.md?
- How do path-scoped rules help in a monorepo?
- What's the advantage of organizing rules in subdirectories?

## ✅ Completion Criteria
- [ ] You created rule files in .claude/rules/ with YAML frontmatter
- [ ] You used `paths` to scope rules to specific file patterns
- [ ] You observed Claude applying different rules to different files
- [ ] You understand the best practices for organizing modular rules
