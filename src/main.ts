import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { seedCategories } from './categories/categories.seed';
import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { sequelize } from './database';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
      transform: true,
    }),
  );

  const config = new DocumentBuilder()
    .setTitle('Shopping Mall Api')
    .setDescription('API documentation guide for Shopping Mal')
    .setVersion('1.0')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  await sequelize.sync();
  await seedCategories();
  await app.listen(3000);
}
bootstrap();
