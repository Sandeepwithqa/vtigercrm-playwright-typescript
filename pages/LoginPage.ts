import { Page } from "@playwright/test";
import { BasePage } from "./base/BasePage";

// LoginPage handles all login-related actions
export class LoginPage extends BasePage {

  // Locators define UI elements
  private username = this.page.locator('input[name="user_name"]');
  private password = this.page.locator('input[name="user_password"]');
  private loginBtn = this.page.locator('#submitButton');

  constructor(page: Page) {
    super(page);
  }

  /**
   * Perform login action
   * @param user - username
   * @param pass - password
   */
  async login(user: string, pass: string) {
    await this.fill(this.username, user, "Username Field");
    await this.fill(this.password, pass, "Password Field");
    await this.click(this.loginBtn, "Login Button");
  }
}