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

5. Display results:
   ```
   🔍 Checking Kata [NNN]: [Title]

   ✅ [Criterion 1]
   ✅ [Criterion 2]
   ❌ [Criterion 3] — [what's missing]

   [X/Y criteria met]
   ```

6. If all criteria are met: "All criteria met! Run /next to advance."
7. If some are missing: Show what's needed and offer guidance.
