import { browser, by, element } from 'protractor';

export class ProfilePage {

    navigateTo() {
        return browser.get('/profile');
    }

    getProfileInformationText() {
        return element(by.css('div:not(.edit-content) h2')).getText();
    }

    getEditProfileText() {
        return element(by.css('.edit-content h2')).getText();
    }

    clearInputField() {
        element(by.css('[name="firstName"]')).clear();
        element(by.css('[name="lastName"]')).clear();
    }

    fillCredentials(credentias) {
        this.clearInputField();
        element(by.css('[name="firstName"]')).sendKeys(credentias.firstName);
        element(by.css('[name="lastName"]')).sendKeys(credentias.lastName);
        element(by.css('.btn-success')).click();
    }

    getSuccessMessage() {
        return element(by.css('.alert-success')).getText();
    }

}
