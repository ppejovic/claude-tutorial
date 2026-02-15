Show the user's current kata and guide them through it one exercise at a time.

Instructions:
1. Read `progress.json` from the repository root to get current state.
2. Read `curriculum/curriculum.json` to get the full curriculum.
3. Find the current kata (from progress.json `currentKata` field).
4. Read the current kata's `kata.md` file.
5. Determine which exercise the user should work on next (Exercise 1 on first run).

6. Display output in this order — keep it SHORT:

   a. **Two-line header** — status + progress bar:
      ```
      Kata 001: First Conversation · Beginner · ~15 min
      Progress: [X/30] ████░░░░░░░░░░░░░░░░
      ```

   b. **One-sentence concept** — summarize the Concept section in a single sentence. Do NOT paste the full paragraph.

   c. **The exercise** — show ONLY the next incomplete exercise. Strip out setup steps the user has obviously already done (e.g., "open terminal", "navigate to directory", "run claude" — they're already in Claude Code). Focus on the actionable steps. When an exercise tells the user to type or ask something, format those prompts as a quote block so they stand out visually:
      ```
      > What files are in this repository?
      ```
      This makes it obvious what to type. Do NOT wrap prompts in regular quotes inside a paragraph.

   That's it. No horizontal rules, no extra headings, no repeating the kata title. No footer or progress summary after the exercise. Aim for ~10 lines total.

7. **Auto-advance:** When the user completes an exercise (e.g., they type the suggested prompt and you execute it successfully), immediately show the next exercise. Don't wait for them to say "done" — just flow naturally into it. If something went wrong, help them fix it before moving on. After the LAST exercise (or challenge), mention `/check` and `/next` — not before.

8. If the user asks to go back to a previous exercise (e.g., "go back to exercise 1", "show exercise 2 again"), show that exercise.

9. If the user asks to see the full kata, show everything from kata.md.

10. If there are NEW katas available (curriculum version > progress curriculumVersion), add one line noting this.

11. If the user has completed all katas, congratulate them.

12. Check the `lastReviewDate` field in progress.json. Only show a review reminder if lastReviewDate is a real date (not null) AND more than 14 days ago:
    ```
    💡 It's been a while since your last review. Run /review to check for course updates and new Claude Code features.
    ```
    Do NOT show this reminder on the user's first session or if they've never run /review before.

Important: The /kata command is READ-ONLY. Do NOT edit any files. The `startedAt` field in progress.json gets set by /next when the user completes their first kata.
