import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Swagger configuration
  const config = new DocumentBuilder()
      .setTitle('Receipts API')
      .setDescription('API for uploading and validating receipts')
      .setVersion('1.0')
      .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document); // Swagger UI will be at http://localhost:3000/api

  await app.listen(3000);
}
bootstrap();
