import { test, expect } from "playwright-test-coverage";

test.beforeEach(async ({ page }) => {
  await page.goto("http://localhost:3000/uploadRequest");
});
const wait = time => new Promise(upload => setTimeout(upload, time));
test.describe("Bulkloader Test", () => {
  test("SCH-138: Drag and drop file uploader page is present", async ({ page }) => {
    page.getByText("Drag & Drop your files and start uploading");
    page.getByText(".xlsx, .csv and .json files are valid file types");
    await page.setInputFiles("#file-upload", "src/assets/example-bulk-file.csv");
    await page.locator('[id="__next"] div:has-text("example-bulk-file.csv")').nth(2).click();
    await wait(3000);
    await page.locator('[id="completed"] svg');
  });

  test("SCH-137: Bulkloader ui page loading symbol working and proper container appearing with the checkmark showing", async ({
    page,
  }) => {
    await page.locator(".chakra-spinner").isVisible();
    await page.locator(".chakra-container").isVisible();
    await page.getByText("example-bulk-file.xlsx");
    await page.locator('[id="__next"] svg');
  });
});
