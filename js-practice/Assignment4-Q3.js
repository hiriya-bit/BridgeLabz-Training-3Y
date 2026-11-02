
class Book {
    constructor(title, author, ISBN, isIssued) {
        this.title = title;
        this.author = author;
        this.ISBN = ISBN;
        this.isIssued = isIssued;
    }

    issueBook() {
        if (!this.isIssued) {
            this.isIssued = true;
            console.log(this.title + " issued successfully");
        } else {
            console.log("Book is already issued");
        }
    }

    returnBook() {
        this.isIssued = false;
        console.log(this.title + " returned successfully");
    }
}

let books = [
    new Book("Java", "James", "101", false),
    new Book("Python", "Guido", "102", true),
    new Book("C++", "Bjarne", "103", false),
    new Book("JavaScript", "Brendan", "104", false)
];

console.log("Available Books:");

books.filter(book => !book.isIssued).forEach(book => {
    console.log(book.title, book.author, book.ISBN);
});

let searchISBN = "101";

let foundBook = books.find(book => book.ISBN === searchISBN);

if (foundBook) {
    foundBook.issueBook();
} else {
    console.log("Book not found");
}
