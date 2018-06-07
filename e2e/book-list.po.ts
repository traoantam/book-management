import { browser, by, element } from 'protractor';

export class BookListPage {

    navigateTo() {
        return browser.get('/book-list');
    }

    navagateToBookDetail(book_id) {
        return browser.get('/books/detail/'+book_id);
    }

    navagateToBookEdit(book_id) {
        return browser.get('/books/edit/'+book_id);
    }

    getParagraphText() {
        return element(by.css('app-book-list h2')).getText();
    }

}
