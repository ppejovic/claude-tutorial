const { capitalize, slugify, truncate, camelToKebab } = require('../src/strings');

describe('capitalize', () => {
  test('capitalizes the first letter of a word', () => {
    expect(capitalize('hello')).toBe('Hello');
  });

  test('handles already capitalized strings', () => {
    expect(capitalize('Hello')).toBe('Hello');
  });

  test('returns empty string for empty input', () => {
    expect(capitalize('')).toBe('');
  });

  test('returns empty string for null', () => {
    expect(capitalize(null)).toBe('');
  });

  test('returns empty string for undefined', () => {
    expect(capitalize(undefined)).toBe('');
  });
});

describe('slugify', () => {
  test('converts a simple string to a slug', () => {
    expect(slugify('Hello World')).toBe('hello-world');
  });

  test('handles special characters', () => {
    expect(slugify('Hello, World!')).toBe('hello-world');
  });

  test('handles multiple spaces', () => {
    expect(slugify('hello   world')).toBe('hello-world');
  });

  test('returns empty string for empty input', () => {
    expect(slugify('')).toBe('');
  });

  test('returns empty string for null', () => {
    expect(slugify(null)).toBe('');
  });

  test('returns empty string for undefined', () => {
    expect(slugify(undefined)).toBe('');
  });
});

describe('truncate', () => {
  test('truncates a long string', () => {
    expect(truncate('Hello, World!', 8)).toBe('Hello...');
  });

  test('does not truncate short strings', () => {
    expect(truncate('Hi', 10)).toBe('Hi');
  });

  test('supports custom suffix', () => {
    expect(truncate('Hello, World!', 9, '--')).toBe('Hello, --');
  });

  test('returns empty string for empty input', () => {
    expect(truncate('', 5)).toBe('');
  });

  test('returns empty string for null', () => {
    expect(truncate(null, 5)).toBe('');
  });

  test('returns empty string for undefined', () => {
    expect(truncate(undefined, 5)).toBe('');
  });
});

describe('camelToKebab', () => {
  test('converts camelCase to kebab-case', () => {
    expect(camelToKebab('backgroundColor')).toBe('background-color');
  });

  test('handles consecutive uppercase letters', () => {
    expect(camelToKebab('innerHTML')).toBe('inner-html');
  });

  test('handles single word', () => {
    expect(camelToKebab('color')).toBe('color');
  });

  test('returns empty string for empty input', () => {
    expect(camelToKebab('')).toBe('');
  });

  test('returns empty string for null', () => {
    expect(camelToKebab(null)).toBe('');
  });

  test('returns empty string for undefined', () => {
    expect(camelToKebab(undefined)).toBe('');
  });
});
