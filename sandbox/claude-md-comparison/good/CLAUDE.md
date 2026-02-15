# String Utils Library

A utility library for string transformations. Pure functions, no side effects.

## Code Style
- Use JSDoc comments on all exported functions
- Prefer `const` over `let`, never use `var`
- Use descriptive parameter names (not `s`, `str` — use `inputString`, `text`)
- All functions must be pure — no mutations, no side effects

## Testing
- Run tests: `npm test`
- Every exported function needs tests covering: normal input, empty string, null/undefined
- Test file mirrors source file: `src/foo.js` → `tests/foo.test.js`

## Architecture
- `src/strings.js` — Core string transformation functions
- `src/index.js` — Public API (re-exports)
- No dependencies beyond Node.js built-ins

## When Adding New Functions
1. Add the function to `src/strings.js`
2. Add JSDoc with @param and @return
3. Add tests for normal, empty, and edge cases
4. Re-export from `src/index.js`
