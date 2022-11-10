import { test, expect } from "playwright-test-coverage";
test("SCH-109: Testing that all text field tags have rendered properly", async ({ page }) => {
  await page.goto("http://localhost:3000/");
  await page.getByRole("button", { name: "LOGIN" }).click();
  await expect(page).toHaveURL("http://localhost:3000/login");
  await page.getByRole("button", { name: "LOGIN" }).click();
  await expect(page).toHaveURL("http://localhost:3000/landing");
  await page
    .getByRole("button", { name: "SUBMIT A REQUEST Submit an individual form for this bi-weekly period." })
    .click();
  await expect(page).toHaveURL("http://localhost:3000/RequestForm");
  await page.getByText("Start Time").click();
  await page.getByText("End Time").click();
  await page.getByText("Shift Date").click();
  await page.getByText("Contact Number").click();
  await page.getByText("Line 1").click();
  await page.getByText("Line 2").click();
  await page.getByText("Zip").click();
  await page.getByText("City").click();
  await page.getByText("Province").click();
  await page.getByText("Specialization").click();
  await page.getByText("Comments").click();
});
