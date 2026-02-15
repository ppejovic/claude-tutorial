Show the user's current kata and overall progress.

Instructions:
1. Read `progress.json` from the repository root to get current state.
2. Read `curriculum/curriculum.json` to get the full curriculum.
3. Find the current kata (from progress.json `currentKata` field).
4. Calculate overall progress: count completed katas vs total katas.
5. Display a progress summary in this format:

```
📖 Claude Code Katas — Progress

Current Kata: [NNN] - [Title]
Module: [Module Name]
Difficulty: [Level] | Est. Time: [X] minutes

Progress: [X/30 katas complete] [progress bar]
Module Progress: [X/Y in current module]

Next up: [Next kata title]
```

6. Read the current kata's `kata.md` file and display a brief overview (the Concept section).
7. If there are NEW katas available (curriculum version > progress curriculumVersion), note them.
8. If the user has completed all katas, congratulate them.

Important: If `progress.json` has no `startedAt` value, set it to the current timestamp — this is their first session.
