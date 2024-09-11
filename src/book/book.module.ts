import { MiddlewareConsumer, Module, NestModule } from "@nestjs/common";
import { bookService } from "./book.service";
import { BookController } from "./book.controller";
import { BookMiddleware } from "./book.middleware";


@Module({
    imports:[],
    controllers:[BookController],
    providers:[bookService],
    exports:[],
})
export class BookModule implements NestModule{
    configure(consumer: MiddlewareConsumer) {
        consumer.apply(BookMiddleware).forRoutes('book')
    }

}