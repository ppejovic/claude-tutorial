# Claude Code Katas

An interactive course that takes you from Claude Code beginner to power user through daily mini-katas.

## What Is This?

30 hands-on katas across 10 modules, designed for daily practice. Each kata takes 10-20 minutes and builds on the previous one. You'll learn by doing — not just reading.

## Prerequisites

- [Claude Code](https://code.claude.com/docs) installed and working
- Node.js 18+ (for sandbox exercises)
- Git (for progress tracking)
- A terminal you're comfortable in

## Getting Started

### 1. Fork & Clone

```bash
# Fork this repo on GitHub, then:
git clone https://github.com/YOUR_USERNAME/claude-code-katas.git
cd claude-code-katas
```

### 2. Install Dependencies

```bash
cd sandbox/sample-app && npm install && cd ../..
```

### 3. Switch to Learn Mode

Edit `CLAUDE.md` and change the first config line:

```
mode: learn
```

### 4. Start Your First Kata

```bash
claude
```

Then type: `/kata`

## How the Flow Works

You run Claude Code **inside this repo** and it acts as your instructor:

1. **`/kata`** shows your current exercise with instructions
2. **Most exercises happen right in the same session** — "ask Claude to explore the sample app," "ask Claude to add a test," etc. You just type the prompt and Claude does it.
3. **Some CLI exercises** (especially Kata 003) ask you to run `claude -p "..."` from a regular terminal. For those, open a second terminal tab.
4. **`/check`** validates your work, **`/next`** advances you

Think of it like a guided tour: Claude is both the instructor explaining what to do and the tool you practice with.

## Course Structure

| Module | Katas | Topic |
|--------|-------|-------|
| 1. Foundations | 001-003 | First conversation, navigation, CLI essentials |
| 2. Effective Prompting | 004-006 | Specific prompts, verification-driven dev, interview technique |
| 3. Memory & Context | 007-011 | CLAUDE.md, hierarchy, good vs bad, modular rules, auto memory |
| 4. Environment Setup | 012-014 | Permissions, plan mode, session management |
| 5. Workflows | 015-017 | Bug fixing, TDD, git & PR workflows |
| 6. Skills & Commands | 018-020 | Built-in commands, custom skills, advanced skills |
| 7. Hooks | 021-023 | First hook, guards, advanced hooks |
| 8. MCP Servers | 024-026 | Remote MCP, local MCP, practical workflows |
| 9. Subagents | 027-029 | Built-in subagents, custom agents, patterns |
| 10. Advanced Patterns | 030 | Headless mode, fan-out, CI/CD, agent teams |

## Progress Tracking

Your progress is tracked in `progress.json` and committed to git. Use these commands inside Claude Code:

- `/kata` — Show your current kata and overall progress
- `/next` — Advance to the next kata
- `/check` — Verify you've completed the current kata
- `/review` — Check for course updates

## How It Works

Each kata follows a consistent format:
1. **Concept** — Brief explanation with link to official docs
2. **Warm-Up** — Quick recall from previous katas
3. **Exercises** — Hands-on interactive tasks
4. **Challenge** — Optional stretch goal
5. **Reflection** — What you learned and how you'll use it
6. **Completion Criteria** — What `/check` validates

## Sources

All content is based on official Anthropic documentation:
- [Claude Code Documentation](https://code.claude.com/docs)

## Contributing

Found an issue or want to suggest improvements? Open an issue or PR.

## License

MIT
