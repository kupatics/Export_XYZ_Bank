import { type Locator, type Page } from '@playwright/test';

export class CustomerAccountPage {
  readonly logoutButton: Locator;

  constructor(page: Page) {
    this.logoutButton = page.getByRole('button', { name: 'Logout' });
  }

  async logout(): Promise<void> {
    await this.logoutButton.click();
  }
}
