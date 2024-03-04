import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { ProductsModule } from './app/products.module';

async function bootstrap() {
	const app = await NestFactory.create(ProductsModule);
	const globalPrefix = 'api';
	app.setGlobalPrefix(globalPrefix);
	const port = 4500;
	await app.listen(port);
	Logger.log(`🚀 Application is running on: http://localhost:${port}/${globalPrefix}`);
}

bootstrap();
