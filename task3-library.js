class Book {
    #title;
    #author;
    #isAvailable;
    
    constructor (title, author) {
        this.#title = title;
        this.#author = author;
        this.#isAvailable = true;
    }

    get Title() {
        return this.#title;
    }
    
    get Author() {
        return this.#author;
    }

    get isAvailable() {
        return this.#isAvailable;
    }

    checkoutBook() {
       if (this.#isAvailable) {
        console.log(`Ви взяли книгу "${this.#title}"`);
            this.#isAvailable = false;
       } else {
        console.log(`Книга "${this.#title}" тимчасово не доступна. Приходьте пізніше!`);
       }
    }
}
    

class FeministLibrary {
    constructor () {
        this.books = []; 
    }

    addBook(book) {
        this.books.push(book);
    }

    checkoutBook(title) {
        const book = this.books.find(b => b.Title === title);
        if (book) {
            book.checkoutBook();
        } else {
            console.log('Книгу не знайдено в бібліотеці.');
        }
    }

    viewAvailableBooks() {
    const availableBooks = this.books.filter(book => book.isAvailable);
        if (availableBooks.length > 0) {
            console.log("Доступні книги:");
            availableBooks.forEach(book => {
                console.log(`- "${book.Title}" автора ${book.Author}`);
            });
        } else {
            console.log('В бібліотеці немає доступних книг.');
        }
    }
}

    const library = new FeministLibrary();
    const book1 = new Book('Hood Feminism: Notes from the Women That a Movement Forgot', 'Mikki Kendall')
    const book2 = new Book('Whipping Girl: A Transsexual Woman on Sexism and the Scapegoating of Femininity', 'Julia Serano')
    const book3 = new Book('Freedom Is a Constant Struggle', 'Angela Davis')

    library.addBook(book1);
    library.addBook(book2);
    library.addBook(book3);

    library.viewAvailableBooks();

    library.checkoutBook('Freedom Is a Constant Struggle')
    library.viewAvailableBooks();

    library.checkoutBook('Freedom Is a Constant Struggle')