import { browser, by, element, promise } from 'protractor';

export class HomePage {
  navigateTo() {
    return browser.get('/');
  }
}
