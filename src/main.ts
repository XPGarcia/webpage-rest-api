import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ExceptionHandlerFilter } from './shared/infra/filters';
import { ValidationPipe } from '@nestjs/common';
import { BadRequestError } from '@prometeo-dev/error-handler-library/dist/errors';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      transform: true,
      exceptionFactory: () => {
        return new BadRequestError();
      },
    }),
  );
  app.useGlobalFilters(new ExceptionHandlerFilter());
  await import('./events/producer');
  await app.listen(3000);
}
bootstrap();
