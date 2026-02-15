# Kata 011: Auto Memory & /memory
**Module**: Memory & Context | **Difficulty**: Intermediate
**Estimated Time**: 15 minutes
**Source**: [Memory Documentation](https://code.claude.com/docs/en/memory)

## 🧠 Concept
Claude Code can remember things across sessions using auto memory. The official docs describe it as "a persistent directory where Claude records learnings, patterns, and insights as it works." Unlike CLAUDE.md files that contain instructions you write for Claude, auto memory contains notes Claude writes for itself based on what it discovers during sessions. You can also manage memory explicitly with the `/memory` command.

## ⚙️ Prerequisites
- Completed Kata 010

## 🔄 Warm-Up
List three things you'd want Claude to remember across every session in this project. (Examples: "always run tests after changes", "use yarn not npm", "the API is RESTful")

## 🏋️ Exercise 1: How Auto Memory Works
1. Check if you have any auto memory already:
   ```
   Show me the contents of my auto memory files if they exist
   ```
2. Auto memory is stored per-project at `~/.claude/projects/<project>/memory/`. The directory structure might look like this (files are created as Claude learns):
   ```
   ~/.claude/projects/<project>/memory/
   ├── MEMORY.md          # Concise index, loaded into every session
   ├── debugging.md       # Detailed notes on debugging patterns
   ├── api-conventions.md # API design decisions
   └── ...                # Any other topic files Claude creates
   ```
3. The `<project>` path is derived from the git repository root, so all subdirectories within the same repo share one auto memory directory.
4. Important: only the first 200 lines of MEMORY.md are loaded into Claude's system prompt at startup. Topic files are read on demand, not at startup.

## 🏋️ Exercise 2: Explicit Memory with /memory
1. Try the `/memory` command:
   ```
   /memory
   ```
2. This opens a file selector showing your memory files and CLAUDE.md files, letting you edit them in your system editor.
3. Now tell Claude to save something specific:
   ```
   Remember that this project uses Express.js and Jest, and all tests should be run with npm test from the sandbox/sample-app directory.
   ```
4. Start a new session (`/clear`) and verify:
   ```
   What do you remember about running tests in this project?
   ```

## 🏋️ Exercise 3: What Claude Remembers
As the docs explain, Claude may automatically save things like:
- **Project patterns**: build commands, test conventions, code style preferences
- **Debugging insights**: solutions to tricky problems, common error causes
- **Architecture notes**: key files, module relationships, important abstractions
- **Your preferences**: communication style, workflow habits, tool choices

Try this experiment:
1. Tell Claude: "Remember that we prefer pnpm over npm in this project"
2. Ask Claude to save it to memory
3. Check the auto memory directory to see where it was saved
4. Start a new session and ask Claude what package manager this project uses

## 🏋️ Exercise 4: Memory vs CLAUDE.md
When should you use auto memory vs CLAUDE.md?

| Use Auto Memory | Use CLAUDE.md |
|----------------|--------------|
| Personal learned patterns | Project conventions (shared with team) |
| Debugging insights Claude discovers | Architectural decisions |
| Session discoveries | Build/test commands |
| Things Claude learned from mistakes | Code style rules |

Key distinction: Auto memory is personal and learned. CLAUDE.md is deliberate and shared.

1. Tell Claude something personal: "I prefer verbose error messages during development"
2. Ask Claude to save it to memory
3. Verify this does NOT go into CLAUDE.md -- it stays in the auto memory directory

## 🏋️ Exercise 5: Managing Memory
The docs recommend keeping MEMORY.md concise since it's loaded every session (first 200 lines). Claude handles this by moving detailed notes into separate topic files.

1. View current memory contents
2. Ask Claude to update or remove a memory that's no longer relevant
3. Tips for good memory hygiene:
   - Keep MEMORY.md as a concise index
   - Let detailed notes go into topic files
   - Remove outdated information
   - Don't duplicate what's in CLAUDE.md

## 🎯 Challenge
Do a multi-session experiment:
1. In session 1: Work on the sample app and establish a pattern (e.g., always add error handling). Tell Claude to remember key things.
2. End the session
3. In session 2: See if Claude remembers your preference without being told
4. Check the auto memory directory to see what was saved and how it's structured

## 🪞 Reflection
- How does auto memory change the experience of starting a new session?
- What's the right balance between auto memory and CLAUDE.md?
- Why does Claude only load the first 200 lines of MEMORY.md? What does this mean for how you structure memory?

## ✅ Completion Criteria
- [ ] You checked your auto memory file location and contents
- [ ] You explicitly saved something to memory and verified it persisted
- [ ] You can explain the difference between auto memory and CLAUDE.md
- [ ] You understand the MEMORY.md + topic file structure
- [ ] You know where auto memory files are stored per-project
