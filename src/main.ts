import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { logger } from './Cats/logger.middleware';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
}
bootstrap();
