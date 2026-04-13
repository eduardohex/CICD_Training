# Hexaware_AutomationFW

E2E test suite using Playwright + TypeScript.

## Setup

```bash
npm install
npx playwright install --with-deps
```

## Running tests

```bash
npm test                  # All tests, headless
npm run test:headed       # All tests, headed
npx playwright test --project=chromium  # Single browser
```

## Lint & format

```bash
npm run lint              # ESLint
npm run lint:fix          # Auto-fix ESLint issues
npm run format            # Prettier write
npm run format:check      # Prettier check (used in CI)
npm run type-check        # TypeScript type checking
```

## CI Workflows

| Workflow          | Trigger               | Steps                                     |
| ----------------- | --------------------- | ----------------------------------------- |
| **PR Validation** | PR opened → `testing` | Lint → Unit tests → E2E tests             |
| **Post-Merge**    | PR merged → `testing` | Bump patch version → Delete source branch |

## Project structure

```
├── tests/
│   └── practice-automation.spec.ts       # tests
├── .github/workflows/
│   ├── pr-validation.yml    # PR checks
│   └── post-merge.yml       # Merge automation
├── .vscode/
│   └── settings.json        # Format on save
├── playwright.config.ts
├── .eslintrc.js
├── .prettierrc.js
└── tsconfig.json
```
New changes