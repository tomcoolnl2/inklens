import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { TagsModule } from './app/tags.module';

async function bootstrap() {
	const app = await NestFactory.create(TagsModule);
	const globalPrefix = 'api';
	app.setGlobalPrefix(globalPrefix);
	const port = 4300;
	await app.listen(port);
	Logger.log(`🚀 Application is running on: http://localhost:${port}/${globalPrefix}`);
}

bootstrap();
