import { Injectable } from "@nestjs/common";
import { Book } from "./data/book.dto";


@Injectable()
export class bookService {
public books: Book[] = []


    addBookService(book:Book) : string {
        this.books.push(book);
        return "Books has been successfully added";
    }

    updateBookService(book:Book) : string {
        let index = this.books.findIndex((currentBook) => {
            return currentBook.id == book.id
        })
        this.books[index] = book
        return "Book has been successfully updated"
    }

    deleteBookSErvice(bookId :string) : string {
        this.books = this.books.filter((currentBook) => {
            return currentBook.id !== bookId
        })
        return "Book has been deleted"
    }

    findAllBooks() : Book[] {
        return this.books;
    }
}