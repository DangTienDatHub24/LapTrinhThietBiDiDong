class Book {    
    title: string;
    author: string;

    constructor(title: string, author: string){
        this.title = title;
        this.author = author;
    }
}

class User {
    name: string;
    constructor(name: string){
        this.name = name;
    }
}

class Library{
    books: Book[];
    users: User[];

    constructor(){
        this.books = [];
        this.users = [];
    }
    addBook(book: Book): void{
        this.books.push(book);
    }

    addUser(user: User): void{
        this.users.push(user);
    }

    showBooks(): void{
        this.books.forEach(b =>{
            console.log(`Title: ${b.title}, Author: ${b.author}`)
        });
    }
}

const library = new Library();
const book1 = new Book("The Great Gatsby", "F. Scott Fitzgerald");
const book2 = new Book("Harry Potter", "J.K. Rowling");

const user1 = new User("Dat");

library.addBook(book1);
library.addBook(book2);
library.addUser(user1);

library.showBooks();