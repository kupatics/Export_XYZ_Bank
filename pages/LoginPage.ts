import { type Locator, type Page } from '@playwright/test';

export class LoginPage {
  readonly customerLoginButton: Locator;
  readonly customerSelector: Locator;
  readonly loginButton: Locator;

  constructor(private readonly page: Page) {
    this.customerLoginButton = page.getByRole('button', { name: 'Customer Login' });
    this.customerSelector = page.locator('#userSelect');
    this.loginButton = page.getByRole('button', { name: 'Login' });
  }

  async goto(): Promise<void> {
    await this.page.goto('/angularJs-protractor/BankingProject/#/login');
  }

  async startCustomerLogin(): Promise<void> {
    await this.customerLoginButton.click();
  }

  async selectCustomer(value: string): Promise<void> {
    await this.customerSelector.selectOption(value);
  }

  async login(): Promise<void> {
    await this.loginButton.click();
  }
}
