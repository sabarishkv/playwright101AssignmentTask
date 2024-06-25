import { test, expect, Locator } from "@playwright/test";

test("has title", async ({ page }) => {
  const nameTittles: string = "//div[@id='inventory_container']//a/div";
  const nameTittleNew: Locator = await page.locator(
    "//div[@id='inventory_container']//a/div"
  );
  let titles: string[] = [];

  await page.goto("https://www.saucedemo.com/");
  await page.locator('[data-test="username"]').click();
  await page.locator('[data-test="username"]').click();
  await page.locator('[data-test="username"]').fill("standard_user");
  await page.locator('[data-test="password"]').click();
  await page.locator('[data-test="password"]').fill("secret_sauce");
  await page.locator('[data-test="password"]').press("Enter");
  await page.waitForTimeout(6000);
  let countTest: any = await page.locator(nameTittles).count();
  console.log("Count of locators" + countTest);

  for (let i = 1; i <= countTest; i++) {
    let productName: any = await page
      .locator(`(//div[@id='inventory_container']//a/div)[${i}]`)
      .textContent();
    titles.push(productName);
  }

  for(let j=0;j<=titles.length;j++)
  {
    if(titles[j].localeCompare(titles[j+1])>0){
        console.log(`The strings ${titles[j]} and ${titles[j+1]} are in alphabetical order.`);
    } else {
      console.log(`The strings ${titles[j]} and ${titles[j+1]} are NOT in alphabetical order.`);
    }   

  }

});
