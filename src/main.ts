import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const options = new DocumentBuilder()
  .setTitle('Latihan CRUD API')
  .setDescription('Latihan membuat api crud dan documentasi dengan nestjs dan openapi swagger')
  .setVersion('1.0.1')
  .addServer('http://localhost:3000')
  .build()

  const document = SwaggerModule.createDocument(app,options)
  SwaggerModule.setup('api/docs',app, document)
  await app.listen(3000);
}
bootstrap();
