import { SignInPage } from './sign-in.po';
import { browser } from 'protractor';

describe('Login page', () => {
    let page: SignInPage;

    const wrongCredentias = {
        email: 'traoantam@gmail.com',
        password: 'wrongpasswd'
    };

    beforeEach(() => {
        page = new SignInPage();
    });

    it('when user trying to login with wrong credentials he should stay on “login” page and see error notification', () => {
        page.navigateTo();
        page.fillCredentials(wrongCredentias);
        expect(page.getParagraphText()).toEqual('LOGIN');
        expect(page.getErrorMessage()).toEqual('Invalid username and/or password.');
    });

    it('user login with right credentials and then redirect to dashboard page', () => {
        page.navigateTo();
        page.fillCredentials();
        expect(page.getDashboardPage()).toEqual('traoantam@gmail.com');
    });

});
