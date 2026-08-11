import { test as base, expect } from '@playwright/test';
import { LoginPage } from '../pages/loginPage.page.js';
import { requireEnv } from '../utils/env.js';

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

test('user cannot login with invalid username', async ({loginPage}) => {
  await loginPage.login('wrong_username', requireEnv('SAUCE_PASSWORD'));
  await expect(loginPage.errorMessage).toBeVisible();
});

test('user can login by pressing Enter', async ({page, loginPage}) => {
  await loginPage.login(requireEnv('SAUCE_USERNAME'), requireEnv('SAUCE_PASSWORD'), {useEnter: true});
  await expect(page).toHaveURL(/inventory/);
})