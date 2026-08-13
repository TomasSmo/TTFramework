import { type Locator, type Page, test } from '@playwright/test';

export class LoginPage {
  readonly page: Page;
  readonly usernameInput: Locator;
  readonly passwordInput: Locator;
  readonly loginButton: Locator;
  readonly errorMessage: Locator;

  constructor(page: Page) {
    this.page = page;

    this.usernameInput = page.locator("[data-test='username']");
    this.passwordInput = page.locator("[data-test='password']");
    this.loginButton = page.locator("[data-test='login-button']");
    this.errorMessage = page.locator("[data-test='error']");
  }

  async goto() {
    await this.page.goto('/');
  }

  async login(
    username: string,
    password: string,
    options: { useEnter?: boolean } = { useEnter: false },
  ) {
    await test.step(`Logging in as "${username}"`, async () => {
      await test.step('Filling in the username', async () => {
        await this.usernameInput.fill(username);
      });

      await test.step('Filling in the password', async () => {
        await this.passwordInput.fill(password);
      });

      if (options.useEnter) {
        await test.step('Pressing Enter to login', async () => {
          await this.passwordInput.press('Enter');
        });
      } else {
        await test.step('Clicking Login button', async () => {
          await this.loginButton.click();
        });
      }
    });
  }
}
