import { Module, NestModule, MiddlewareConsumer } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { ProxyMiddleware } from '../middlewares/proxy.middleware';
import { GatewayController } from './gateway.controller';
import { GatewayService } from './gateway.service';

@Module({
	imports: [
		ConfigModule.forRoot({
			envFilePath: process.env.NODE_ENV === 'development' ? '.env.local' : '.env',
			isGlobal: true,
		}),
	],
	controllers: [GatewayController],
	providers: [GatewayService],
})
export class AppModule implements NestModule {
	configure(consumer: MiddlewareConsumer) {
		consumer.apply(ProxyMiddleware).forRoutes('*');
	}
}
