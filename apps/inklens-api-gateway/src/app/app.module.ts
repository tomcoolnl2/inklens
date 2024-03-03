import { Module, NestModule, MiddlewareConsumer } from '@nestjs/common';
import { ProxyMiddleware } from '../middlewares/proxy.middleware';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
	imports: [],
	controllers: [AppController],
	providers: [AppService],
})
export class AppModule implements NestModule {
	configure(consumer: MiddlewareConsumer) {
		consumer.apply(ProxyMiddleware).forRoutes('*');
	}
}
