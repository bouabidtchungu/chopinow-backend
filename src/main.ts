import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(new ValidationPipe({ whitelist: true }));

  app.enableCors({
    origin: ['https://staging.chopinow.com', 'http://localhost:3000'],
  });

  await app.listen(process.env.PORT || 4000);
  console.log(`Backend running on port ${process.env.PORT || 4000}`);
}
bootstrap();