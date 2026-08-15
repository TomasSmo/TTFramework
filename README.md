# TTFramework (Tomas Testing Framework)

My first simple framework built with TypeScript.

## Status

Early development...

## Prerequisites

- Node.js (LTS)

## Installation

Install dependencies:

```bash
npm install
```

Install Playwright browsers:

```bash
npm playwright install
```

Verify the TypeScript:

```bash
npx tsc --noEmit
```

## Environment Variables

This project requires a `.env` file in the project root with the following variables:

```env
SAUCE_USERNAME=your_username
SAUCE_PASSWORD=your_password
```

## Running the tests

Run the tests:

```bash
npx playwright test
```

Run the tests in headed:

```bash
npx playwright test --headed
```

## Scripts

| Command                   | Description                                                       |
| ------------------------- | ----------------------------------------------------------------- |
| `npm run lint`            | Check code for lint errors                                        |
| `npm run lint:fix`        | Auto-fix lint errors where possible                               |
| `npm run format`          | Format all files with Prettier                                    |
| `npm run format:check`    | Check formatting without making changes (used in CI)              |
| `npm run allure:generate` | Generate a static Allure HTML report from the latest test results |
| `npm run allure:open`     | Open the most recently generated Allure report                    |
| `npm run allure:serve`    | Generate and open an Allure report in one step (local dev)        |
