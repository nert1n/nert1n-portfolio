import { expect, test } from "@playwright/test";

const URL = "http://localhost:3000";

test.describe("App routing", () => {
	test.beforeEach(async ({ page }) => {
		await page.goto(`${URL}/signin`);
		await page.waitForTimeout(1000);
	});

	test("redirect to page sign-up", async ({ page }) => {
		await page.click("text=Sign up");
		await expect(page).toHaveURL(`${URL}/signup`);
	});
});
