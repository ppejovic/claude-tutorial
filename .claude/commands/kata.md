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

6. Read the current kata's `kata.md` file and display the full exercises (not just the Concept section). The user should be able to start working immediately after running /kata.

7. After displaying the kata content, show clear next-step instructions:
   ```
   Ready to start? Work through the exercises above right here in this session.
   When you're done, run /check to verify completion, then /next to advance.
   ```

8. If there are NEW katas available (curriculum version > progress curriculumVersion), note them.
9. If the user has completed all katas, congratulate them.

10. Check the `lastReviewDate` field in progress.json. Only show a review reminder if lastReviewDate is a real date (not null) AND more than 14 days ago:
   ```
   💡 It's been a while since your last review. Run /review to check for course updates and new Claude Code features.
   ```
   Do NOT show this reminder on the user's first session or if they've never run /review before.

Important: The /kata command is READ-ONLY. Do NOT edit any files. The `startedAt` field in progress.json gets set by /next when the user completes their first kata.
