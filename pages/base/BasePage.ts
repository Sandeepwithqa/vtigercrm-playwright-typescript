import { Page, Locator } from "@playwright/test";

// BasePage contains reusable common actions for all pages
export class BasePage {

  // Constructor receives Playwright page instance
  constructor(protected page: Page) {}

  /**
   * Fill text into an input field
   * @param locator - Element locator
   * @param value - Text to enter
   * @param elementName - Name used for logging
   */
  async fill(locator: Locator, value: string, elementName: string) {
    await locator.fill(value);
    console.log(`Typed into ${elementName}`);
  }

  /**
   * Click on an element
   * @param locator - Element locator
   * @param elementName - Name used for logging
   */
  async click(locator: Locator, elementName: string) {
    await locator.click();
    console.log(`Clicked on ${elementName}`);
  }

  /**
   * Wait for an element to be visible
   * @param locator - Element locator
   */
  async waitForElement(locator: Locator) {
    await locator.waitFor({ state: "visible" });
    console.log(`Element is visible`);
  }

  /**
   * Get text content from an element
   * @param locator - Element locator
   * @returns text content
   */
  async getText(locator: Locator): Promise<string | null> {
    const text = await locator.textContent();
    console.log(`Fetched text: ${text}`);
    return text;
  }

  /**
   * Check if element is visible
   * @param locator - Element locator
   * @returns boolean
   */
  async isVisible(locator: Locator): Promise<boolean> {
    const visible = await locator.isVisible();
    console.log(`Element visibility: ${visible}`);
    return visible;
  }

  /**
   * Hover over an element
   * @param locator - Element locator
   */
  async hover(locator: Locator) {
    await locator.hover();
    console.log(`Hovered on element`);
  }

  /**
   * Select value from dropdown
   * @param locator - Dropdown locator
   * @param value - Value to select
   */
  async selectDropdown(locator: Locator, value: string) {
    await locator.selectOption(value);
    console.log(`Selected value: ${value}`);
  }

  /**
   * Get attribute value from element
   * @param locator - Element locator
   * @param attr - Attribute name
   * @returns attribute value
   */
  async getAttribute(locator: Locator, attr: string): Promise<string | null> {
    const value = await locator.getAttribute(attr);
    console.log(`Attribute ${attr}: ${value}`);
    return value;
  }

  /**
   * Wait for URL to match expected value
   * @param url - Expected URL or pattern
   */
  async waitForURL(url: string) {
    await this.page.waitForURL(url);
    console.log(`Navigated to URL: ${url}`);
  }

}