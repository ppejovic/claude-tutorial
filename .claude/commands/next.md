Advance the user to the next kata.

Instructions:
1. Read `progress.json` to get the current kata ID.
2. Read `curriculum/curriculum.json` to find the next kata in sequence.
3. Before advancing, run `/check` logic to verify the current kata is complete:
   - Read the current kata's `kata.md` and look at the Completion Criteria section.
   - For each criterion, check if it can be automatically verified (file exists, test passes).
   - If criteria are not met, tell the user what's still needed and don't advance.
4. If all criteria are met (or self-reported):
   - Update `progress.json`: add current kata to `completed` with timestamp, set `currentKata` to next kata ID.
   - Write the updated `progress.json`.
   - Display: "✅ Kata [NNN] complete! Moving to Kata [NNN+1]: [Title]"
   - Show a brief overview of the next kata (its Concept section).
5. If the user just completed the last kata in a module, celebrate the module completion.
6. If there are no more katas, congratulate them on completing the entire course.
