import { browser, by, element } from 'protractor';

export class SignInPage {
    private credentias = {
        email: 'traoantam@gmail.com',
        password: '12345678'
    }

    navigateTo() {
        return browser.get('/sign-in');
    }

    fillCredentials(credentias: any = this.credentias) {
        element(by.css('[name="email"]')).sendKeys(credentias.email);
        element(by.css('[name="password"]')).sendKeys(credentias.password);
        element(by.css('.btn-success')).click();
    }

    getParagraphText() {
        return element(by.css('sign-in h2')).getText();
    }

    getErrorMessage() {
        return element(by.css('.alert-danger')).getText();
    }
  
    getDashboardPage() {
        return element(by.css('.username')).getText();
    }
}
