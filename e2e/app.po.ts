import { browser, element, by } from 'protractor';

export class HvagPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('hvag-root h1')).getText();
  }
}
