import { test, expect } from "playwright-test-coverage";
test.beforeEach(async ({ page }) => {
  await page.goto("http://localhost:3000/");
});
test.describe("Homepage Test", () => {
  test("Testing the signup button located on the homepage by clicking on it and redirecting us to the registration page", async ({
    page,
  }) => {
    //Clicking the logo for Schedule-Me
    await page.getByRole("img", { name: "Cannot find image" }).click();
    //Clicking on the signup button
    await page.getByRole("button", { name: "SIGN UP" }).click();
    //After clicking the signup button, it redirects you to the registration page
    await expect(page).toHaveURL("http://localhost:3000/registration");
  });

  test("Testing the login button located on the homepage by clicking on it and redirecting us to the login page", async ({
    page,
  }) => {
    //Clicking on the login page
    await page.getByRole("button", { name: "LOGIN" }).click();
    //After clicking the login button, it redirects you to the login page
    await expect(page).toHaveURL("http://localhost:3000/login");
  });
});
