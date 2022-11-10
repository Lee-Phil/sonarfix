import { test, expect } from "playwright-test-coverage";

test("login_responsive", async ({ page }) => {
  await page.goto("http://localhost:3000/login");
  await page.getByRole("img", { name: "Cannot find image" }).click();
  await page.getByPlaceholder("Email").click();
  await page.getByPlaceholder("Password").click();
  await page.getByRole("button", { name: "LOGIN" }).click();
  await expect(page).toHaveURL("http://localhost:3000/landing");
});
