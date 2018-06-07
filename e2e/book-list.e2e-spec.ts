import { BookListPage } from './book-list.po';
import { browser, element, by } from 'protractor';

describe('Book List page', () => {
    let page: BookListPage;

    beforeEach(() => {
        page = new BookListPage();
    });

    it('redirect to book list page', () => {
        page.navigateTo();
        expect(page.getParagraphText()).toEqual('BOOK LIST');
    });

    it('View click redirect to detail page', () => {
        page.navagateToBookDetail('224');
        expect(browser.getCurrentUrl()).toContain('/books/detail/224');
    });

    it('Edit click redirect to edit page by book id', () => {
        page.navigateTo();
        page.navagateToBookEdit('223');
        expect(browser.getCurrentUrl()).toContain('/books/edit/223');
        expect(element(by.css('[name="title"]')).getAttribute('value')).toEqual('Amazon');
        expect(element(by.css('[name="author"]')).getAttribute('value')).toEqual('Amazon');
        expect(element(by.css('[name="description"]')).getAttribute('value')).toEqual('good');
    });

});
