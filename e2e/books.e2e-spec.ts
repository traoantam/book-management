import { BooksPage } from './books.po';
import { browser, element, by } from 'protractor';

describe('Books page', () => {
    let page: BooksPage;

    const wrongCredentias = {
        title: '',
        author: '',
        description: ''
    };

    beforeEach(() => {
        page = new BooksPage();
    });


    it('View click redirect to detail page', () => {
        page.navagateToBookEdit('224');
        expect(page.getParagraphText()).toEqual('EDIT BOOK');
    });

    it('should be display message success when not empty title and author fields', () => {
        page.fillEditBookListForm();
        expect(page.getSuccessMessage()).toEqual('Edit Book success');
    });

});
