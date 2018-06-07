import { browser, by, element } from 'protractor';

export class PublicPage {
 
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('.username')).getText();
  }

  logOut() {
    return element(by.css('.sub-info li:nth-child(2)')).click();
  }

}
