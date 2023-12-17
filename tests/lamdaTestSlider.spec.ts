import { test, expect, Locator } from "@playwright/test";
import { executionAsyncId } from "async_hooks";
test("has title", async ({ page, baseURL }) => {
  await page.goto("https://www.lambdatest.com/selenium-playground");
await page.locator("//a[text()='Drag & Drop Sliders']").click();
await page.waitForTimeout(5000);
  const sliderXPath = "//div[@id='slider3']//input";
  const slider = await page.waitForSelector(sliderXPath);

  if (slider) {
    // Get the bounding box of the slider
    const sliderBoundingBox = await slider.boundingBox();

    if (sliderBoundingBox) {
      // Calculate the target position for the slider handle
      const targetX = sliderBoundingBox.x + (sliderBoundingBox.width * (95 / 100));

      // Use mouse to drag the slider handle to the desired position
      await page.mouse.move(sliderBoundingBox.x, sliderBoundingBox.y);
      await page.mouse.down();
      await page.mouse.move(targetX, sliderBoundingBox.y);
      await page.mouse.up();

      // Get the current value of the slider
      const currentValue = await page.$eval(sliderXPath, (slider) => {
        // Assuming the slider has a property like "value" to represent its current value
        return (slider as any).value; // You may need to adjust this based on your HTML structure
      });

      // Validate whether the slider is set to 95
      if (currentValue === 95) {
        console.log('Slider successfully set to 95.');
      } else {
        console.error(`Slider value is ${currentValue}, expected 95.`);
      }
    } else {
      console.error('Slider bounding box is null.');
    }
  } else {
    console.error('Slider element not found.');
  }

  await expect(page.locator("//div[@id='slider3']//output")).toHaveText('95');


})