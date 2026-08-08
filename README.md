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