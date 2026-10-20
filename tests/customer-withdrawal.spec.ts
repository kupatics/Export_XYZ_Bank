import { expect, test } from '@playwright/test';
import { CustomerAccountPage } from '../pages/CustomerAccountPage';
import { DepositPage } from '../pages/DepositPage';
import { LoginPage } from '../pages/LoginPage';
import { WithdrawalPage } from '../pages/WithdrawalPage';

test('customer can withdraw money after depositing', async ({ page }) => {
  const loginPage = new LoginPage(page);
  const customerAccountPage = new CustomerAccountPage(page);
  const depositPage = new DepositPage(page);
  const withdrawalPage = new WithdrawalPage(page);

  await loginPage.goto();
  await loginPage.startCustomerLogin();
  await loginPage.selectCustomer('2');
  await loginPage.login();

  await customerAccountPage.openDeposit();
  await depositPage.deposit('1000');
  await expect(depositPage.successMessage).toBeVisible();

  await customerAccountPage.openWithdrawal();
  await withdrawalPage.enterAmount('100');
  await expect(withdrawalPage.amountInput).toHaveValue('100');
  await withdrawalPage.submitWithdrawal();
  await expect(withdrawalPage.successMessage).toBeVisible();
});
