import { type Locator, type Page } from '@playwright/test';

export class WithdrawalPage {
  readonly amountInput: Locator;
  readonly submitButton: Locator;
  readonly successMessage: Locator;

  constructor(page: Page) {
    this.amountInput = page.getByRole('form').getByPlaceholder('amount');
    this.submitButton = page.getByRole('button', { name: 'Withdraw', exact: true });
    this.successMessage = page.getByText('Transaction successful');
  }

  async enterAmount(amount: string): Promise<void> {
    await this.amountInput.waitFor({ state: 'visible' });
    await this.amountInput.fill(amount);
  }

  async submitWithdrawal(): Promise<void> {
    await this.submitButton.click();
  }
}
