import { Module, NestModule, MiddlewareConsumer } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { ProxyMiddleware } from '../middlewares/proxy.middleware';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
	imports: [
		ConfigModule.forRoot({
			envFilePath: process.env.NODE_ENV === 'development' ? '.env.local' : '.env',
			isGlobal: true,
		}),
	],
	controllers: [AppController],
	providers: [AppService],
})
export class AppModule implements NestModule {
	configure(consumer: MiddlewareConsumer) {
		consumer.apply(ProxyMiddleware).forRoutes('*');
	}
}
