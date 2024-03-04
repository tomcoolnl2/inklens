import { Controller, Get } from '@nestjs/common';

import { GatewayService } from './gateway.service';

@Controller({ version: '1' })
export class GatewayController {
	//
	constructor(private readonly gatewayService: GatewayService) {}

	@Get()
	getData() {
		return this.gatewayService.getData();
	}
}
