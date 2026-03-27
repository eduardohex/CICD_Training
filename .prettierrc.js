/** @type {import('prettier').Config} */
module.exports = {
  // ── Quotes ───────────────────────────────────────────────────────────────
  singleQuote: true, // Always single quotes instead of double
  jsxSingleQuote: true, // Single quotes in JSX attributes too

  // ── Semicolons ───────────────────────────────────────────────────────────
  semi: true, // Always add semicolons

  // ── Trailing commas ──────────────────────────────────────────────────────
  trailingComma: 'all', // Trailing commas wherever valid (ES5+)

  // ── Line length ──────────────────────────────────────────────────────────
  printWidth: 100, // Wrap lines at 100 chars

  // ── Indentation ──────────────────────────────────────────────────────────
  tabWidth: 2,
  useTabs: false,

  // ── Brackets ─────────────────────────────────────────────────────────────
  bracketSpacing: true, // { foo: bar } with spaces
  bracketSameLine: false, // JSX closing > on new line
  arrowParens: 'always', // Always (x) => x, never x => x

  // ── End of line ──────────────────────────────────────────────────────────
  endOfLine: 'lf', // Unix line endings (important for CI/Git)
};
