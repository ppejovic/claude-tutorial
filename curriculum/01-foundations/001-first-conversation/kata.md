# Kata 001: First Conversation
**Module**: Foundations | **Difficulty**: Beginner
**Estimated Time**: 15 minutes
**Source**: [Getting Started](https://code.claude.com/docs/en/quickstart)

## Concept
Your first interaction with Claude Code. You'll learn how to start a session, ask questions, and understand how Claude Code differs from the web chat. Claude Code is an agentic coding tool that runs in your terminal -- it can read your codebase, edit files, run commands, and integrate with your development tools.

## Prerequisites
- Claude Code installed (see [installation options](https://code.claude.com/docs/en/overview#get-started)):
  - Native install (recommended): `curl -fsSL https://claude.ai/install.sh | bash`
  - Homebrew: `brew install --cask claude-code`
  - npm: `npm install -g @anthropic-ai/claude-code`
- A Claude Pro/Max subscription, Anthropic Console account, or supported cloud provider

## Exercise 1: Start Claude Code
1. Open your terminal and navigate to this repository's root directory
2. Run `claude` to start a session
3. You should see the Claude Code welcome screen with session information. Type: "What files are in this repository?"
4. Observe: Claude reads the directory and lists files. Notice it uses tools (like `Bash`, `Glob`, or `Read`) automatically.

## Exercise 2: Ask About Code
1. Ask Claude: "Explain what sandbox/sample-app does"
2. Observe: Claude reads multiple files to understand the project
3. Notice how it navigates the codebase without you pointing to specific files

## Exercise 3: Make a Small Change
1. Ask Claude: "Add a comment at the top of sandbox/sample-app/src/index.js that says '// Sample Express app for Claude Code Katas'"
2. Observe: Claude uses its Edit tool to modify the file
3. Claude will ask for your permission before modifying the file -- approve it
4. Check the file yourself to confirm the change

## Exercise 4: Undo and Control
1. Press Escape to cancel any in-progress response
2. Type `/clear` to start a fresh conversation (history is cleared but files remain)
3. Ask Claude: "What was the last change you made?" -- It won't know! Context was cleared.

## Challenge
Ask Claude to do something multi-step: "Look at the sample app's test file, run the tests, and tell me if anything fails." Watch how it chains tool calls together autonomously.

## Reflection
- How does Claude Code differ from using Claude in a web browser?
- What kinds of actions can Claude Code take that web Claude cannot?
- When did Claude ask for permission before acting?

## Completion Criteria
- [ ] You started a Claude Code session in this repository
- [ ] You asked Claude to explore the repo and it read files automatically
- [ ] You asked Claude to make a small code change and confirmed it worked
- [ ] You used `/clear` to reset the conversation
- [ ] You observed Claude using tools (Read, Edit, Bash, etc.)
