import { type Locator, type Page } from '@playwright/test';

export class CustomerAccountPage {
  readonly logoutButton: Locator;
  readonly depositNavigationButton: Locator;
  readonly withdrawalNavigationButton: Locator;

  constructor(page: Page) {
    this.logoutButton = page.getByRole('button', { name: 'Logout' });
    this.depositNavigationButton = page.getByRole('button', { name: 'Deposit' });
    this.withdrawalNavigationButton = page.getByRole('button', { name: 'Withdrawl' });
  }

  async openDeposit(): Promise<void> {
    await this.depositNavigationButton.click();
  }

  async openWithdrawal(): Promise<void> {
    await this.withdrawalNavigationButton.click();
  }

  async logout(): Promise<void> {
    await this.logoutButton.click();
  }
}
