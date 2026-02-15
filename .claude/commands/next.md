Advance the user to the next kata.

Instructions:
1. Read `progress.json` to get the current kata ID.
2. Read `curriculum/curriculum.json` to find the next kata in sequence.
3. Before advancing, run `/check` logic to verify the current kata is complete:
   - Read the current kata's `kata.md` and look at the Completion Criteria section.
   - For each criterion, check if it can be automatically verified (file exists, test passes).
   - If criteria are not met, tell the user what's still needed and don't advance:
     ```
     ⏸️ Not quite ready — some criteria still need work:
     ❌ [criterion] — [what's needed]

     Complete these and run `/next` again!
     ```
4. If all criteria are met (or self-reported):
   - Update `progress.json`: add current kata to `completed` with timestamp, set `currentKata` to next kata ID.
   - If `startedAt` is null, set it to the current timestamp (this is the user's first completion).
   - Write the updated `progress.json`.
   - Display a celebration with progress update:
     ```
     🎉 **Kata [NNN] complete!**

     ⬛⬛⬛⬛⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜ [X/30]

     **Up next → Kata [NNN+1]: [Title]**
     🧠 [One-sentence concept of the next kata]
     ```

   - If the user is on their first completion (startedAt was just set), add a welcome milestone:
     ```
     ⭐ First kata down! You're officially on your way.
     ```

   - If the user has a streak going, mention it:
     ```
     🔥 [N]-day streak! Keep the momentum!
     ```

5. If the user just completed the last kata in a module, give a bigger celebration:
   ```
   🏆 **Module [N]: [Module Title] — Complete!**
   You've finished all [X] katas in this module. Onward to Module [N+1]!
   ```

6. If there are no more katas, give the ultimate celebration:
   ```
   🚀🚀🚀

   **You've completed the entire Claude Code Katas course!**

   [X] katas across [Y] modules — from beginner to power user.
   You started on [startedAt date] and made it all the way.

   🔄 Run `/review` periodically to check for new katas and features.
   ```
