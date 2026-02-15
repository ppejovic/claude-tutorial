Review official sources and the upstream course repository for updates.

Instructions:

## Part 1: Check for Course Updates (Upstream Repo)

1. Run `git remote -v` to check if an `upstream` remote exists.
   - If not, check if the `origin` remote points to a fork (not the original course repo). If it's a fork, suggest:
     ```
     git remote add upstream https://github.com/ppejovic/claude-tutorial.git
     ```
   - If `origin` IS the original repo, skip upstream checks.

2. If an `upstream` remote exists, run:
   ```
   git fetch upstream main --quiet
   ```

3. Compare the local curriculum with upstream:
   - Run `git diff HEAD..upstream/main -- curriculum/curriculum.json` to check for new katas
   - Run `git diff HEAD..upstream/main --stat -- curriculum/` to see changed kata files
   - Run `git log HEAD..upstream/main --oneline` to see new commits

4. Report course updates:
   ```
   📦 Course Repository Check

   Upstream: [remote URL]
   New commits available: [count]

   New katas added:
   - Kata [NNN]: [Title] (Module [X])

   Updated katas:
   - Kata [NNN]: [summary of changes]

   To pull updates: git merge upstream/main
   (Your progress.json will not be overwritten — it tracks by kata ID)
   ```

   If no upstream remote and it looks like a fork, suggest adding one.
   If no updates, say "Course is up to date."

## Part 2: Check Official Documentation

5. Fetch the latest Claude Code documentation from https://code.claude.com/docs
6. Compare against the topics covered in `curriculum/curriculum.json`.
7. Look for:
   - New features not covered by any existing kata
   - Changed features that might affect existing kata content
   - Deprecated features that should be noted
8. Report findings:

   ```
   📋 Documentation Review — [Date]

   Source: https://code.claude.com/docs

   New Features Found:
   - [Feature]: Could be added to Module [X] as Kata [NNN]
   - [Feature]: Could extend Kata [NNN]

   Changes to Existing Topics:
   - [Topic]: [What changed, which kata affected]

   No Action Needed:
   - [Topics that are still current]
   ```

9. If new features are found, suggest where in the curriculum they should go:
   - Basic features → Earlier modules
   - Advanced features → Later modules
   - Never renumber existing katas; use new IDs

## Part 3: Update Review Timestamp

10. Update `lastReviewDate` in `progress.json` to the current ISO timestamp.
11. Don't make any other changes automatically — just report and suggest.
