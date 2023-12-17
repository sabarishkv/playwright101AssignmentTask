import { test, expect } from "@playwright/test";
test("Test Scenario 1", async ({ page, baseURL }) => {
  await page.goto("https://www.lambdatest.com/selenium-playground");
  await page.locator("//a[text()='Simple Form Demo']").click();
  await expect(page).toHaveURL(/simple-form-demo/)
  let enterText: string = "Welcome to LambdaTest";
  await page.locator("//input[@id='user-message']").fill(enterText);
  await page.locator("//button[@id='showInput']").click();
  await expect(page.locator("//p[@id='message']")).toHaveText(enterText);
});

/*
Test Scenario 1:
1. Open LambdaTest’s Selenium Playground from https: //www.lambdatest.com/selenium-playground
2. Click “Simple Form Demo” under Input Forms.
3. Validate that the URL contains “simple-form-demo”.
4. Create a variable for a string value E.g: “Welcome to LambdaTest”.
5. Use this variable to enter values in the “Enter Message” text box.
6. Click “Get Checked Value”.
7. Validate whether the same text message is displayed in the right-hand
panel under the “Your Message:” section.*/
