import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Global validation pipe for DTOs
  app.useGlobalPipes(
      new ValidationPipe({
        whitelist: true, // Strip properties that are not in DTOs
        transform: true, // Automatically transform payloads to DTO instances
        forbidUnknownValues: false,
      }),
  );

  // Swagger OpenAPI configuration
  const config = new DocumentBuilder()
      .setTitle('Receipts Validation API')
      .setDescription(
          'API for uploading receipts and validating basic metadata. ' +
          'Current milestone: mock endpoints, no OCR, no business rules yet.',
      )
      .setVersion('1.0.0')
      .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document); // Swagger UI at /api

  await app.listen(3000);
  // console.log(`Application is running on: ${await app.getUrl()}`);
}

bootstrap();
