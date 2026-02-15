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

6. Read the current kata's `kata.md` file, but do NOT display everything at once. Use **progressive reveal**:
   a. Show the **Concept** section briefly (the introductory explanation).
   b. Determine which exercise the user should work on next (Exercise 1 on first run).
   c. Show **only that one exercise** — not the others, not the Challenge, not the Reflection or Completion Criteria.
   d. End with a note like:
      ```
      This kata has N exercises + a challenge. Complete Exercise 1, then tell me when you're done and I'll show the next one.
      When you've finished all exercises, run /check to verify completion, then /next to advance.
      ```
   e. When the student says they finished an exercise or asks for the next one, show the next exercise (or the Challenge if all exercises are done). This is natural conversation — no special command needed.
   f. If the user asks to see the full kata, show everything.

7. If there are NEW katas available (curriculum version > progress curriculumVersion), note them.
8. If the user has completed all katas, congratulate them.

9. Check the `lastReviewDate` field in progress.json. Only show a review reminder if lastReviewDate is a real date (not null) AND more than 14 days ago:
   ```
   💡 It's been a while since your last review. Run /review to check for course updates and new Claude Code features.
   ```
   Do NOT show this reminder on the user's first session or if they've never run /review before.

Important: The /kata command is READ-ONLY. Do NOT edit any files. The `startedAt` field in progress.json gets set by /next when the user completes their first kata.
