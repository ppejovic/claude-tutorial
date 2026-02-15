# Kata 008: CLAUDE.md Hierarchy
**Module**: Memory & Context | **Difficulty**: Intermediate
**Estimated Time**: 20 minutes
**Source**: [Memory Documentation](https://code.claude.com/docs/en/memory)

## 🧠 Concept
CLAUDE.md files form a hierarchy. Claude Code loads them from multiple locations with different scopes: user-level (applies everywhere), project-level (applies to the repo), and directory-level (applies to specific paths). Understanding this hierarchy lets you layer instructions appropriately. As the docs state: "More specific instructions take precedence over broader ones."

## ⚙️ Prerequisites
- Completed Kata 007
- A CLAUDE.md exists in sandbox/sample-app/

## 🔄 Warm-Up
Where is the CLAUDE.md you created in Kata 007? What scope does it have? (Answer: sandbox/sample-app/, directory-level scope within the project)

## 🏋️ Exercise 1: The CLAUDE.md Loading Order
Claude Code loads memory from these locations, each serving a different purpose:

| Memory Type | Location | Purpose | Shared With |
|-------------|----------|---------|-------------|
| **User memory** | `~/.claude/CLAUDE.md` | Personal preferences for all projects | Just you (all projects) |
| **Project memory** | `./CLAUDE.md` or `./.claude/CLAUDE.md` | Team-shared instructions for the project | Team via source control |
| **Project rules** | `./.claude/rules/*.md` | Modular, topic-specific project instructions | Team via source control |
| **Project memory (local)** | `./CLAUDE.local.md` | Personal project-specific preferences | Just you (current project) |
| **Auto memory** | `~/.claude/projects/<project>/memory/` | Claude's automatic notes and learnings | Just you (per project) |

CLAUDE.md files in directories above the working directory are loaded in full at launch. CLAUDE.md files in child directories load on demand when Claude reads files in those directories.

Verify: Ask Claude in this repo: "What CLAUDE.md files do you see and in what order are they loaded?"

## 🏋️ Exercise 2: Create a User-Level CLAUDE.md
1. Create (or edit) your user-level CLAUDE.md:
   ```
   Create ~/.claude/CLAUDE.md with these personal preferences:
   - Always explain changes before making them
   - Use TypeScript when creating new files (unless the project uses JavaScript)
   - Prefer functional programming patterns
   ```
2. Now start Claude in the sample-app directory. Your user preferences AND the project CLAUDE.md both apply.
3. Ask Claude to create a utility. Does it try to use TypeScript? (It should, from your user prefs -- but the project CLAUDE.md says the project uses JS, so observe how Claude reconciles this. The project-level instruction is more specific and takes precedence.)

> **Note:** After this kata, you may want to edit or remove `~/.claude/CLAUDE.md` so the TypeScript preference doesn't affect your other projects.

## 🏋️ Exercise 3: Directory-Scoped CLAUDE.md
1. Create a CLAUDE.md in sandbox/sample-app/tests/:
   ```markdown
   # Test Conventions
   - Use describe/it blocks (not test())
   - Group tests by endpoint
   - Include both success and error cases
   - Use meaningful assertion messages
   ```
2. Ask Claude to add a test. If it is working in the tests/ directory, it should follow these conventions. Note: child directory CLAUDE.md files load on demand when Claude reads files in those directories.
3. Now ask Claude to add something to src/. The tests/ CLAUDE.md should NOT apply there.

## 🏋️ Exercise 4: CLAUDE.local.md for Personal Preferences
The docs mention `CLAUDE.local.md` as the recommended way to store personal project-specific preferences:

1. Create a CLAUDE.local.md in the repo root or sandbox/sample-app/:
   ```markdown
   # Personal Preferences
   - I prefer verbose console output during development
   - My local test database is at localhost:5432
   ```
2. Note that CLAUDE.local.md is automatically added to .gitignore, so your personal preferences do not get committed.
3. Verify Claude sees it by asking: "What personal preferences do you see for me?"

## 🏋️ Exercise 5: Hierarchy Experiment
You now have CLAUDE.md at multiple levels. Let's see them interact:
1. Ask Claude: "List all the CLAUDE.md conventions that apply to sandbox/sample-app/tests/"
   - It should show: user-level + repo root + sample-app/ + tests/ conventions
2. Ask Claude: "List all the CLAUDE.md conventions that apply to sandbox/sample-app/src/"
   - It should show: user-level + repo root + sample-app/ conventions (NOT tests/)

## 🎯 Challenge
Explore CLAUDE.md imports. The docs explain that CLAUDE.md files can import additional files using `@path/to/import` syntax. Try adding an import to your CLAUDE.md:
```markdown
See @README.md for project overview and @package.json for available npm commands.
```
Verify that Claude picks up the imported content.

## 🪞 Reflection
- When would you use user-level vs project-level vs directory-level CLAUDE.md?
- How do you handle conflicts between levels? (More specific instructions take precedence.)
- What is the benefit of CLAUDE.local.md over .claude/CLAUDE.md?

## ✅ Completion Criteria
- [ ] You understand the memory type hierarchy and loading locations
- [ ] You created CLAUDE.md at multiple levels and observed the stacking behavior
- [ ] You verified that directory-scoped CLAUDE.md only applies to that directory
- [ ] You experimented with CLAUDE.local.md for personal preferences
- [ ] You can explain when to use each level
