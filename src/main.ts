import { NestFactory } from '@nestjs/core';
import {RootModule } from './root.module';
import { NextFunction, Request } from 'express';

function globalMiddleware1(req:Request,res:Response,next:NextFunction){
console.log("global middleware 1 executed :::::  ");
next();
}


async function bootstrap() {
  const app = await NestFactory.create(RootModule);
  app.use(globalMiddleware1);
  await app.listen(3000);
}
bootstrap();
