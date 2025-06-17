import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import * as bodyParser from 'body-parser';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.use((req, res, next) => {
    if (!req.headers['content-type']) {
      req.headers['content-type'] = 'application/json';
    }
    next();
  });
  app.useGlobalPipes(new ValidationPipe({ whitelist: true, transform: true })); // to validate the schema
  await app.listen(3000);
}
bootstrap();
