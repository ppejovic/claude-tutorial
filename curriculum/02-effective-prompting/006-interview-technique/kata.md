# Kata 006: The Interview Technique
**Module**: Effective Prompting | **Difficulty**: Intermediate
**Estimated Time**: 15 minutes
**Source**: [Claude Code Best Practices](https://docs.anthropic.com/en/docs/claude-code/best-practices)

## Concept
You do not always know the best approach upfront. Instead of guessing at a detailed prompt, the official best practices recommend: "For larger features, have Claude interview you first." Claude asks about things you might not have considered, including technical implementation, UI/UX, edge cases, and tradeoffs. This is especially effective for architectural decisions and complex features.

## Prerequisites
- Completed Kata 005

## Warm-Up
Think of a feature you would want to add to the sample app. Do not write a prompt yet -- just hold the idea in your mind.

## Exercise 1: Let Claude Interview You
The best practices provide a specific template for the interview technique:

1. Try this prompt (adapted from the official recommendation):
   ```
   I want to add user authentication to the sample app. Before implementing anything, interview me by asking detailed questions.

   Ask about technical implementation, UI/UX, edge cases, concerns, and tradeoffs. Don't ask obvious questions -- dig into the hard parts I might not have considered.

   Keep interviewing until we've covered everything, then write a complete spec.
   ```
2. Answer Claude's questions (make up answers -- this is practice)
3. After the interview, Claude should propose an approach. Evaluate: Does it match your answers?

## Exercise 2: Scoped Interviews
The interview technique works at different scales:

**Feature-level:**
```
I want to add caching to the sample app. Ask me questions about my requirements before implementing anything.
```

**Architecture-level:**
```
I'm thinking about restructuring the sample app to use a service layer pattern. Interview me about the current pain points and goals before suggesting changes.
```

**Bug investigation:**
```
Users are reporting that tasks sometimes disappear. Interview me about the symptoms before investigating.
```

Try at least two of these and see how Claude's questions differ based on scope.

## Exercise 3: Combining Techniques
Now combine the interview technique with verification-driven development (Kata 005):

1. Start with an interview:
   ```
   I want to add a tagging system to tasks. Interview me about the requirements.
   ```
2. Answer the questions
3. Once Claude proposes an approach, add verification:
   ```
   Good approach. Now write the tests first based on those requirements. Then implement the feature. Run tests to verify.
   ```

This is a powerful workflow: Interview then Agree on approach then Tests first then Implement then Verify.

## Exercise 4: The "Explore First" Variant
The best practices recommend separating research from implementation. Sometimes you do not need a full interview -- just want Claude to explore and plan before acting:

```
I want to improve the error handling in the sample app. Before making changes, analyze the current error handling approach, identify gaps, and propose a plan. Don't make any changes until I approve the plan.
```

This maps to the official four-phase workflow: Explore, Plan, Implement, Commit. You are using the first two phases here.

## Exercise 5: Interview to Spec
The best practices suggest a powerful pattern: interview, write a spec, then start a fresh session:

1. Run the interview:
   ```
   I want to add a task priority system with due dates and reminders. Interview me about the requirements, then write a complete spec to sandbox/sample-app/SPEC.md.
   ```
2. Answer the questions thoroughly
3. Review the spec Claude produces
4. Start a fresh Claude session (`/clear` or new terminal) and use the spec:
   ```
   Read @sandbox/sample-app/SPEC.md and implement it. Write tests first, then implement. Run tests to verify.
   ```

The fresh session has clean context focused entirely on implementation, and you have a written spec to reference.

## Challenge
Combine everything from Module 2 in one workflow:
1. Start with an interview about adding a "task priority" feature
2. Get Claude to write specific acceptance criteria
3. Have it write tests first
4. Implement and verify
5. All existing tests still pass

## Reflection
- When is the interview technique more appropriate than writing a detailed prompt?
- How does the interview technique help with tasks you are not sure about?
- The best practices note that Claude "asks about things you might not have considered." When has this been most valuable?
- What is the right balance between interviewing and just getting started?

## Completion Criteria
- [ ] You had Claude interview you about a feature before implementing
- [ ] You answered Claude's questions and got a tailored proposal
- [ ] You combined the interview technique with verification-driven development
- [ ] You used the "explore first" variant to get a plan before code changes
