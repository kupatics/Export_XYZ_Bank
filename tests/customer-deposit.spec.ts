import { expect, test } from '@playwright/test';
import { CustomerAccountPage } from '../pages/CustomerAccountPage';
import { DepositPage } from '../pages/DepositPage';
import { LoginPage } from '../pages/LoginPage';

test('customer can deposit money', async ({ page }) => {
  const loginPage = new LoginPage(page);
  const customerAccountPage = new CustomerAccountPage(page);
  const depositPage = new DepositPage(page);

  await loginPage.goto();
  await loginPage.startCustomerLogin();
  await loginPage.selectCustomer('2');
  await loginPage.login();

  await customerAccountPage.openDeposit();
  await depositPage.deposit('1000');
  await expect(depositPage.successMessage).toBeVisible();
});
