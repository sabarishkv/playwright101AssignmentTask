import { test, expect, Locator } from "@playwright/test";
test("Test Scenario 2", async ({ page, baseURL }) => {
  await page.goto("https://www.lambdatest.com/selenium-playground");
});
