import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';
import * as httpProxy from 'http-proxy-middleware';

@Injectable()
export class ProxyMiddleware implements NestMiddleware {
	//
	use(req: Request, res: Response, next: NextFunction) {
		//
		const apiEndpoints = {
			'/api/tasks': { target: 'http://localhost:2000' },
			'/api/products': { target: 'http://localhost:3000' },
		};

		// Get the proxy config based on the requested endpoint
		const proxyConfig = apiEndpoints[req.url];

		if (!proxyConfig) {
			// If no proxy config is found, move to the next middleware
			return next();
		}

		// Proxy requests based on the requested endpoint
		const proxy = httpProxy.createProxyMiddleware(proxyConfig);

		proxy(req, res, next);
	}
}
