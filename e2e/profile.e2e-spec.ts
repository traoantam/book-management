import { ProfilePage } from './profile.po';
import { browser, element, by } from 'protractor';

describe('Profile page', () => {
    let page: ProfilePage;

    const rightCredentias = {
        firstName: 'Tam',
        lastName: 'Trao'
    };

    beforeEach(() => {
        page = new ProfilePage();
    });

    it('redirect to profile page', () => {
        page.navigateTo();
        expect(page.getProfileInformationText()).toEqual('PROFILE INFORMATION');
        expect(page.getEditProfileText()).toEqual('EDIT PROFILE');
    });

    it('update profile', () => {
        page.fillCredentials(rightCredentias);
        expect(page.getSuccessMessage()).toEqual('Edit profile success');
        expect(element(by.css('.profile-infor li:nth-child(2)')).getAttribute('innerHTML')).toBe('<span _ngcontent-c2="">Last Name:</span>Trao');
    });

});
