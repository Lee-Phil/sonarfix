import { expect, test } from "@playwright/test";
const requests = require("./test-data/requests.json");

test.beforeEach(async ({ page }) => {
  await page.route("**/api/request/search/amountRequests/**/**", async (route, request) => {
    await route.fulfill({
      status: 200,
      contentType: "application/json",
      body: JSON.stringify(6),
    });
  });
  await page.route("**/api/request/filter/*/*/**", async (route, request) => {
    await route.fulfill({
      status: 200,
      contentType: "application/json",
      body: JSON.stringify(requests),
    });
  });

  await page.goto("http://localhost:3000/supervisor/myRequests");
  await page.getByRole("img", { name: "Schedule-Me Logo." });
  await page.getByText("My Requests");
  await page.getByText("Filled Shifts");
  await page.getByText("Unfilled Shifts");
  await page.getByText("Completed");
  await page.getByText("Cancelled");
  await page.getByRole("cell", { name: "Name" });
  await page.getByRole("cell", { name: "Start" });
  await page.getByRole("cell", { name: "Status" });
  await page.getByText("© 2022 Schedule-Me. All rights reserved.");
  await page.getByRole("img", { name: "Team 12 Logo." });
});

test("Testing Supervisor My-Requests Page", async ({ page }) => {
  await page.goto("http://localhost:3000");
  await expect(page).toHaveURL("http://localhost:3000");
  await page.getByRole("button", { name: "LOGIN" }).click();
  await expect(page).toHaveURL("http://localhost:3000/login");
  await page.getByPlaceholder("Email").click();
  await page.getByPlaceholder("Email").fill("richardNurse@gmail.com");
  await page.getByPlaceholder("Email").press("Tab");
  await page.getByPlaceholder("Password").fill("DSmalls");
  await page.getByRole("button", { name: "LOGIN" }).click();
  await expect(page).toHaveURL("http://localhost:3000/landing");
  await page.getByRole("button", { name: "MY UPLOADS View the status of your requested shifts." }).click();
  await expect(page).toHaveURL("http://localhost:3000/supervisor/myRequests");
  await page.getByRole("cell", { name: "ADULT_CARE" });
  await page.getByRole("cell", { name: "2022-20-16 12:00" });
  await page.getByRole("row", { name: "ADULT_CARE 2022-20-12 08:00 FILLED" }).getByRole("cell", { name: "FILLED" });
  await page.getByRole("button", { name: "2" }).click();
  await page.getByRole("cell", { name: "MENTAL_HEALTH" });
  await page.getByRole("cell", { name: "2022-20-22 18:00" });
  await page.getByRole("row", { name: "MENTAL_HEALTH 2022-20-22 18:00 FILLED" }).getByRole("cell", { name: "FILLED" });
});

test("Filter Requests, Expect Data when filtered tabs are clicked.", async ({ page }) => {
  await page.getByRole("tab", { name: "Filled Shifts" }).click();
  await page.getByRole("cell", { name: "ADULT_CARE" });
  await page.getByRole("cell", { name: "2022-20-16 12:00" });
  await page.getByRole("row", { name: "ADULT_CARE 2022-20-12 08:00 FILLED" }).getByRole("cell", { name: "FILLED" });
  await page.getByRole("tab", { name: "Unfilled Shifts" }).click();
  await page.getByRole("cell", { name: "PRIMARY_CARE" });
  await page.getByRole("cell", { name: "2022-20-14 10:00" });

  await page
    .getByRole("row", { name: "PRIMARY_CARE 2022-20-14 10:00 UNFILLED" })
    .getByRole("cell", { name: "UNFILLED" });
});
