import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

const PORT = 3000;

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  console.log(`Server running on ${PORT}`);
  await app.listen(PORT);
}

bootstrap();
