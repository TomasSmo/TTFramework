import { test, expect } from '@playwright/test';

function requireEnv(name: string): string {
  const value = process.env[name];
  if (!value) throw new Error(`Missing required env var: ${name}`);
  return value;
}

test('user can login', async ({ page }) => {
  await page.goto('/');

  await page.getByPlaceholder('Username').fill(requireEnv('SAUCE_USERNAME'));
  await page.getByPlaceholder('Password').fill(requireEnv('SAUCE_PASSWORD'));
  await page.getByRole('button', { name: 'Login' }).click();

  await expect(page).toHaveURL(/inventory/);
});