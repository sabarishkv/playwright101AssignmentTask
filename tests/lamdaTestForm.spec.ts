import { test, expect, Locator } from "@playwright/test";
test("Test Scenario 2", async ({ page, baseURL }) => {
  await page.goto("https://www.lambdatest.com/selenium-playground");
  await page.locator("//a[text()='Input Form Submit']").click();
  await page.locator("//button[text()='Submit']").click();
  await page.waitForTimeout(5000);
  const errorMessage = await page.$eval(
    "input:invalid",
    (input: HTMLInputElement) => input.validationMessage
  );

  // Validate the error message as per your requirement
  if (errorMessage === "Please fill out this field.") {
    console.log("Validation passed. Required field error message is correct.");
  } else {
    console.error("Validation failed. Unexpected error message:", errorMessage);
  }

  await page.waitForTimeout(10000);
  await page.getByPlaceholder("Name", { exact: true }).fill("Lamdatest ");
  await page.getByPlaceholder("Name", { exact: true }).press("Tab");
  await page
    .getByPlaceholder("Email", { exact: true })
    .fill("Lamdatest@gmail.com");
  await page.getByPlaceholder("Email", { exact: true }).press("Tab");
  await page.getByPlaceholder("Password").fill("Test@123");
  await page.getByPlaceholder("Password").press("Tab");
  await page.getByPlaceholder("Company").fill("Lamdatest");
  await page.getByPlaceholder("Company").press("Tab");
  await page.getByPlaceholder("Website").fill("lamdatest.com");
  await page.getByRole("combobox").selectOption("US");
  await page
    .locator("div")
    .filter({ hasText: /^City\*$/ })
    .click();
  await page.getByPlaceholder("City").click();
  await page.getByPlaceholder("City").fill("San Jose");
  await page.getByPlaceholder("City").press("Tab");
  await page.getByPlaceholder("Address 1").fill("Street 10");
  await page.getByPlaceholder("Address 1").press("Tab");
  await page.getByPlaceholder("Address 2").fill("House 10");
  await page.getByPlaceholder("Address 2").press("Tab");
  await page.getByPlaceholder("State").fill("California");
  await page.getByPlaceholder("State").press("Tab");
  await page.getByPlaceholder("Zip code").fill("95125");
  let successMessage = await page.locator("//p[contains(@class,'success-msg')]").textContent();
  console.log("Error message is:  "+ successMessage);
  await expect(
    page.locator("//p[contains(@class,'success-msg')]")
  ).toContainText("Thanks for contacting us, we will get back to you shortly.");
  await page.pause();
});
