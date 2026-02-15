/**
 * Capitalizes the first letter of a string.
 * @param {string} text - The input string to capitalize
 * @returns {string} The string with the first letter capitalized
 */
function capitalize(text) {
  if (text == null) return '';
  const str = String(text);
  if (str.length === 0) return '';
  return str.charAt(0).toUpperCase() + str.slice(1);
}

/**
 * Converts a string into a URL-friendly slug.
 * @param {string} text - The input string to slugify
 * @returns {string} A lowercase, hyphen-separated slug
 */
function slugify(text) {
  if (text == null) return '';
  return String(text)
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, '')
    .replace(/[\s_]+/g, '-')
    .replace(/-+/g, '-')
    .replace(/^-+|-+$/g, '');
}

/**
 * Truncates a string to a specified length, appending an ellipsis if needed.
 * @param {string} text - The input string to truncate
 * @param {number} maxLength - The maximum length of the returned string (including suffix)
 * @param {string} [suffix='...'] - The suffix to append when truncating
 * @returns {string} The truncated string
 */
function truncate(text, maxLength, suffix = '...') {
  if (text == null) return '';
  const str = String(text);
  if (str.length <= maxLength) return str;
  return str.slice(0, maxLength - suffix.length) + suffix;
}

/**
 * Converts a camelCase string to kebab-case.
 * @param {string} text - The camelCase input string
 * @returns {string} The kebab-case version of the string
 */
function camelToKebab(text) {
  if (text == null) return '';
  return String(text)
    .replace(/([a-z0-9])([A-Z])/g, '$1-$2')
    .replace(/([A-Z])([A-Z][a-z])/g, '$1-$2')
    .toLowerCase();
}

module.exports = { capitalize, slugify, truncate, camelToKebab };
