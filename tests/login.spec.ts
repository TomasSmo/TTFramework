import { test as base, expect } from '@playwright/test';
import { LoginPage } from '../pages/loginPage.page.js';

function requireEnv(name: string): string {
  const value = process.env[name];
  if (!value) throw new Error(`Missing required env var: ${name}`);
  return value;
}

const test = base.extend<{ loginPage: LoginPage }>({
  loginPage: async ({ page }, use) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await use(loginPage);
  },
});

test('user can login', async ({ page, loginPage }) => {
  await loginPage.login(requireEnv('SAUCE_USERNAME'), requireEnv('SAUCE_PASSWORD'));
  await expect(page).toHaveURL(/inventory/);
});

test('user cannot login with invalid password', async ({loginPage}) => {
  await loginPage.login(requireEnv('SAUCE_USERNAME'),'wrong_password');
  await expect(loginPage.errorMessage).toBeVisible();
});