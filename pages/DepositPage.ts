import { type Locator, type Page } from '@playwright/test';

export class DepositPage {
  readonly amountInput: Locator;
  readonly submitButton: Locator;
  readonly successMessage: Locator;

  constructor(page: Page) {
    this.amountInput = page.getByPlaceholder('amount');
    this.submitButton = page.getByRole('form').getByRole('button', { name: 'Deposit' });
    this.successMessage = page.getByText('Deposit Successful');
  }

  async deposit(amount: string): Promise<void> {
    await this.amountInput.click();
    await this.amountInput.fill(amount);
    await this.submitButton.click();
  }
}
