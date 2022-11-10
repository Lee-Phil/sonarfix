import { test, expect } from "playwright-test-coverage";
test.beforeEach(async ({ page }) => {
  await page.goto("http://localhost:3000/registration");
});
test.describe("Registration Test", () => {
  test("Testing the registration page sign up button for the creation of the nurse account by filing the necessary inputs and then clicking the signup button", async ({
    page,
  }) => {
    //Clicking the inputs and filling the necessary information
    await page.getByRole("img").click();
    await page.getByPlaceholder("Email").fill("johndoe@gmail.com");
    await page.getByPlaceholder("Password").fill("johndoe1");
    await page.getByPlaceholder("First Name").fill("John");
    await page.getByPlaceholder("Last Name").fill("Doe");
    await page.getByPlaceholder("Medical License Number").fill("12345");
    await page.getByPlaceholder("Phone Number").fill("5141231234");
    await page.getByPlaceholder("Birthday").fill("1991-12-03");
    await page.getByPlaceholder("Province").fill("QC");
    await page.getByPlaceholder("City").fill("Laval");
    await page.getByPlaceholder("Zip").fill("3567");
    await page.getByPlaceholder("Line 1").fill("Apple Tree Street");
    await page.getByPlaceholder("Line 2").fill("Yummy Corp");

    //Choosing the nurse option
    await page.locator("span").first().click();
    await page.getByRole("button", { name: "Signup" }).click();
  });

  test("Testing the registration page sign up of the supervisor account by demonstrating that only clicking the supervisor role option and then clicking sign up won't work since we need to put all the other required fields ", async ({
    page,
  }) => {
    await page.getByText("SUPERVISOR").click();
    await page.getByRole("button", { name: "Signup" }).click();
    await page.getByText("Email is required").click();
    await page.getByText("Password is required").click();
    await page.getByText("First Name is required").click();
    await page.getByText("Last Name is required").click();
    await page.getByText("Practicing Nurse Lisence is required").click();
    await page.getByText("Phone Number is required").click();
    await page.getByText("Birthday is required").click();
    await page.getByText("Province is required").click();
    await page.getByText("City is required").click();
    await page.getByText("Zip is required").click();
    await page.getByText("Line 1 is required").click();
  });

  test("Testing the registration sign up for a nurse account creation when a mandatory input is missing and expecting an error message", async ({
    page,
  }) => {
    //Clicking the inputs and filling the necessary information
    await page.getByPlaceholder("Email").click();
    await page.getByPlaceholder("Email").fill("jerrysteinfield@gmail.com");
    await page.getByPlaceholder("First Name").click();
    await page.locator('label:has-text("NURSE")').click();
    //Message telling the user that the First Name field is required
    await page.getByText("First Name is required").isVisible();
  });

  test("Testing the registration sign up for supervisor account creation when a mandatory input is missing and expecting an error message", async ({
    page,
  }) => {
    //Clicking the inputs and filling the necessary information
    await page.getByPlaceholder("Email").click();
    await page.getByText("SUPERVISOR").click();
    //Message telling the user that the email was a required input
    await page.getByText("Email is required").isVisible();
  });

  test("Testing the registration for a nurse account with a wrong type of input (email type wrong), then clicking the signup button and receiving an error message", async ({
    page,
  }) => {
    //Clicking the inputs and filling the necessary information
    await page.getByPlaceholder("Email").click();
    await page.getByPlaceholder("Email").fill("blakeharmony");
    await page.getByPlaceholder("Password").click();
    await page.locator('label:has-text("NURSE")').click();
    await page.getByRole("button", { name: "Signup" }).click();
    //Message indicating that the email type was wrong
    await page.getByText("email must be a valid email").click();
  });

  test("Testing registration for supervisor account with a wrong type of input (password type wrong), then clicking the signup button and receiving an error message", async ({
    page,
  }) => {
    //Clicking the inputs and filling the necessary information
    await page.getByPlaceholder("Email").click();
    await page.getByPlaceholder("Email").fill("robertoluongo@gmail.com");
    await page.getByPlaceholder("Password").click();
    await page.getByPlaceholder("Password").fill("rb1");
    await page.getByPlaceholder("First Name").click();
    await page.getByText("SUPERVISOR").click();
    //Message indicating that the password type was wrong
    await page.getByText("Password must be 8 characters at minimum").click();
  });

  test("Testing the registration page cancel button by clicking it and redirecting us to the homepage", async ({
    page,
  }) => {
    await page.getByRole("button", { name: "Cancel" }).click();
    await expect(page).toHaveURL("http://localhost:3000/");
  });
});
