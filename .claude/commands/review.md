Review official sources for course updates.

Instructions:
1. Fetch the latest Claude Code documentation from https://code.claude.com/docs
2. Compare against the topics covered in `curriculum/curriculum.json`.
3. Look for:
   - New features not covered by any existing kata
   - Changed features that might affect existing kata content
   - Deprecated features that should be noted
4. Report findings:

   ```
   📋 Source Review — [Date]

   Documentation checked: https://code.claude.com/docs

   New Features Found:
   - [Feature]: Could be added to Module [X] as Kata [NNN]
   - [Feature]: Could extend Kata [NNN]

   Changes to Existing Topics:
   - [Topic]: [What changed, which kata affected]

   No Action Needed:
   - [Topics that are still current]
   ```

5. If new features are found, suggest where in the curriculum they should go:
   - Basic features → Earlier modules
   - Advanced features → Later modules
   - Never renumber existing katas; use new IDs
6. Don't make changes automatically — just report and suggest.
