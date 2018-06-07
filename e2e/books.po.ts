import { browser, by, element } from 'protractor';

export class BooksPage {

    private credentias = {
        title: 'Tiki',
        author: 'Tiki',
        description: 'not bad'
    } 

    navagateToBookEdit(book_id) {
        return browser.get('/books/edit/'+book_id);
    }

    getParagraphText() {
        return element(by.css('app-books h2')).getText();
    }

    clearInputField() {
        element(by.css('[name="title"]')).clear();
        element(by.css('[name="author"]')).clear();
        element(by.css('[name="description"]')).clear();
    }

    fillEditBookListForm(credentias: any = this.credentias) {
        this.clearInputField();
        element(by.css('[name="title"]')).sendKeys(credentias.title);
        element(by.css('[name="author"]')).sendKeys(credentias.author);
        element(by.css('[name="description"]')).sendKeys(credentias.description);
        element(by.css('.btn-success')).click();
    }

    getSuccessMessage() {
        return element(by.css('.alert-success')).getText();
    }
}
