import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { bookService } from "./book.service";
import { Book } from "./data/book.dto";


@Controller('book')
export class BookController {
constructor(private bookService : bookService) {

}

@Get('/findAll')
getAllBooks(): Book[] {
    return this.bookService.findAllBooks()
}

@Put('/updateBook')
updateBook(@Body() book : Book): string {
    return this.bookService.updateBookService(book)
}

@Delete("/delete/:id")
deleteBook(@Param('id') bookId : string) :string {
    return this.bookService.deleteBookSErvice(bookId)
}


@Post('/addBook')
addBook(@Body() book : Book): string {
    return this.bookService.addBookService(book)
}

}