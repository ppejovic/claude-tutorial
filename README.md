# 🥋 Claude Code Katas

An interactive course that takes you from Claude Code beginner to power user through daily mini-katas.

## What Is This?

Learn Claude Code by **doing**, not reading. 30 hands-on katas across 10 modules, designed for daily practice. Each kata takes 10-20 minutes and builds on the previous one.

> 📦 **Current status:** Modules 1-3 (Katas 001-011) are complete. Modules 4-10 are planned but not yet built. See `IMPLEMENTATION.md` for details.

## ⚙️ Prerequisites

- [Claude Code](https://code.claude.com/docs) installed and working
- Node.js 18+ (for sandbox exercises)
- Git (for progress tracking)
- A terminal you're comfortable in

## 🚀 Getting Started

### 1. Fork & Clone

```bash
# Fork this repo on GitHub, then:
git clone https://github.com/ppejovic/claude-tutorial.git
cd claude-tutorial
```

### 2. Install Dependencies

```bash
cd sandbox/sample-app && npm install && cd ../..
```

### 3. Start Your First Kata

```bash
claude
```

Then type: `/kata`

## 🔄 How the Flow Works

You run Claude Code **inside this repo** and it acts as your instructor:

1. 📍 **`/kata`** — shows your current exercise with instructions
2. 🏋️ **Most exercises happen right in the same session** — "ask Claude to explore the sample app," "ask Claude to add a test," etc. You just type the prompt and Claude does it.
3. 💻 **Some CLI exercises** (especially Kata 003) ask you to run `claude -p "..."` from a regular terminal. For those, open a second terminal tab.
4. ✅ **`/check`** validates your work, **`/next`** advances you

Think of it like a guided tour: Claude is both the instructor explaining what to do and the tool you practice with.

## 🗺️ Course Structure

| | Module | Katas | Topic | Status |
|---|--------|-------|-------|--------|
| 🟢 | 1. Foundations | 001-003 | First conversation, navigation, CLI essentials | ✅ Available |
| 🟢 | 2. Effective Prompting | 004-006 | Specific prompts, verification-driven dev, interview technique | ✅ Available |
| 🟢 | 3. Memory & Context | 007-011 | CLAUDE.md, hierarchy, good vs bad, modular rules, auto memory | ✅ Available |
| 🟡 | 4. Environment Setup | 012-014 | Permissions, plan mode, session management | 🔜 Planned |
| 🟡 | 5. Workflows | 015-017 | Bug fixing, TDD, git & PR workflows | 🔜 Planned |
| 🟡 | 6. Skills & Commands | 018-020 | Built-in commands, custom skills, advanced skills | 🔜 Planned |
| 🟡 | 7. Hooks | 021-023 | First hook, guards, advanced hooks | 🔜 Planned |
| 🟡 | 8. MCP Servers | 024-026 | Remote MCP, local MCP, practical workflows | 🔜 Planned |
| 🟡 | 9. Subagents | 027-029 | Built-in subagents, custom agents, patterns | 🔜 Planned |
| 🟡 | 10. Advanced Patterns | 030 | Headless mode, fan-out, CI/CD, agent teams | 🔜 Planned |

## 📊 Progress Tracking

Your progress is tracked in `progress.json` and committed to git. Use these commands inside Claude Code:

| Command | What it does |
|---------|-------------|
| `/kata` | 📍 Show your current kata and exercise |
| `/check` | 🔍 Verify you've completed the current kata |
| `/next` | ⏭️ Advance to the next kata |
| `/review` | 🔄 Check for course updates and new features |

## 🥋 How Each Kata Works

Every kata follows the same rhythm:

1. 🧠 **Concept** — Brief explanation with link to official docs
2. 🔄 **Warm-Up** — Quick recall from previous katas
3. 🏋️ **Exercises** — Hands-on interactive tasks
4. 🎯 **Challenge** — Optional stretch goal
5. 🪞 **Reflection** — What you learned and how you'll use it
6. ✅ **Completion Criteria** — What `/check` validates

## 📚 Sources

All content is based on official Anthropic documentation:
- [Claude Code Documentation](https://code.claude.com/docs)

## 🤝 Contributing

Found an issue or want to suggest improvements? Open an issue or PR.

## License

MIT
