import { expect, test } from '@playwright/test';

test('test quick pay flow', async ({ page }) => {
	await page.goto('/quickpay');
    expect(await page.title()).toEqual('quickly receive money')
});
