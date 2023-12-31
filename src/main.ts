import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
// import '../utils/initDB';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('api/v1')
  await app.listen(6000);
}
bootstrap();
