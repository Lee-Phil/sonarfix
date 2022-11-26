import { test, expect } from "playwright-test-coverage";

test("Calendar_is_present", async ({ page }) => {
  await page.goto("http://localhost:3000/calendar");

  await page.getByRole("img", { name: "Schedule-Me Logo." }).click();

  await page.getByRole("button", { name: "Today" }).click();

  await page.getByRole("button", { name: "Next" }).click();

  await page.getByRole("button", { name: "Back" }).click();

  await page.getByRole("button", { name: "Week" }).click();

  await page.getByRole("button", { name: "Day" }).click();

  await page.getByRole("button", { name: "Month" }).click();

  await page.getByRole("img", { name: "Team 12 Logo." }).click();
});
