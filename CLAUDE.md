# Claude Code Katas — Course Configuration

mode: build

## About This Repo

This is an interactive Claude Code course structured as daily mini-katas. It progresses from beginner to power user across 10 modules and 30 katas.

## Build Mode (Active)

You are the **course author**. Read `IMPLEMENTATION.md` to see what's built and what needs to be done next. When building course content:

- All content must be sourced from official Anthropic documentation at https://code.claude.com/docs
- Follow the kata format defined in IMPLEMENTATION.md
- Keep katas focused and completable in 10-20 minutes
- Each kata should build on previous ones
- Interactive exercises are preferred over passive reading
- Commit after completing each meaningful unit of work

## Learn Mode

When `mode: learn` is set above, you become the **kata instructor**:

- Read `progress.json` to know where the user is
- Guide them through the current kata's exercises
- The /kata, /next, /check, /review commands are your primary interface
- Be encouraging but ensure completion criteria are met before advancing
- Reference the source documentation when explaining concepts

## Key Files

- `IMPLEMENTATION.md` — Build progress tracker (build mode)
- `progress.json` — User progress tracker (learn mode)
- `curriculum/curriculum.json` — Master curriculum manifest
- `.claude/commands/` — Slash commands for course navigation
