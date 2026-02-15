Verify completion criteria for the current kata.

Instructions:
1. Read `progress.json` to get the current kata ID.
2. Read the current kata's `kata.md` file.
3. Find the "Completion Criteria" section (look for checkboxes `- [ ]`).
4. For each criterion, attempt to verify it:

   **Automated checks** (do these silently):
   - "File exists at [path]" → Check if the file exists
   - "Test passes" → Run the relevant test command
   - "[file] contains [text]" → Read the file and check
   - "Command runs successfully" → Execute and check exit code

   **Self-reported checks** (ask the user):
   - Anything that requires subjective judgment (e.g., "You understand X")
   - Ask: "Did you complete: [criterion]?" and accept their answer

5. Display results with visual flair:
   ```
   🔍 **Checking Kata [NNN]: [Title]**

   ✅ [Criterion 1]
   ✅ [Criterion 2]
   ❌ [Criterion 3] — [what's missing]

   **[X/Y] criteria met** ⬛⬛⬛⬛⬛⬛⬜⬜⬜⬜
   ```

   Use a mini progress bar after the count to visualize completion ratio.

6. If all criteria are met, celebrate:
   ```
   🎉 **All criteria met!** You nailed this one.
   → Run `/next` to advance to the next kata!
   ```

7. If some are missing, be encouraging but specific:
   ```
   💪 Almost there — [X/Y] done. Here's what's left:

   ❌ [Criterion] — [specific guidance on how to fix it]

   Give it another shot, then run `/check` again.
   ```
