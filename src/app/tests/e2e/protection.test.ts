import { expect, test } from "@playwright/test";

const URL = "http://localhost:3000";

test.describe("Protection routing", () => {
	test.beforeEach(async ({ page }) => {
		await page.goto(`${URL}/chat`);
		await page.waitForTimeout(1000);
	});

	test("redirect to page sign-in", async ({ page }) => {
		await expect(page).toHaveURL(`${URL}/signin`);
	});
});
