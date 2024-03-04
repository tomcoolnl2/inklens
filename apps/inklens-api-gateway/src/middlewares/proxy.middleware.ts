import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';
import * as httpProxy from 'http-proxy-middleware';

@Injectable()
export class ProxyMiddleware implements NestMiddleware {
	use(req: Request, res: Response, next: NextFunction) {
		const apiEndpoints = {
			'/api/tags': { target: process.env.INKLENS_API_URL_TAGS },
			'/api/categories': { target: process.env.INKLENS_API_URL_CATEGORIES },
		};

		const proxyConfig = apiEndpoints[req.originalUrl];
		console.log('ProxyConfig:', proxyConfig, 'Original URL:', req.originalUrl);

		if (!proxyConfig) {
			return next();
		}

		const proxy = httpProxy.createProxyMiddleware({
			target: proxyConfig.target,
			pathRewrite: { [`^${req.originalUrl}`]: req.originalUrl },
		});

		proxy(req, res, next);
	}
}
