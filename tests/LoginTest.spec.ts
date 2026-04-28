import test, { Page } from "@playwright/test";
import { BasePage } from "../pages/base/BasePage";
import { LoginPage } from "../pages/LoginPage";

test( 'User should login successfully with Valid Credencial',async ({page}) =>{

    const loginPage = new LoginPage(page);

    await page.goto("http://localhost:8888/");

    await loginPage.login("admin","saroj");

})