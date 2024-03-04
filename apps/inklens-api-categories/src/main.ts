import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { CategoriesModule } from './app/categories.module';

async function bootstrap() {
	const app = await NestFactory.create(CategoriesModule);
	const globalPrefix = 'api';
	app.setGlobalPrefix(globalPrefix);
	const port = 4400;
	await app.listen(port);
	Logger.log(`🚀 Application is running on: http://localhost:${port}/${globalPrefix}`);
}

bootstrap();
