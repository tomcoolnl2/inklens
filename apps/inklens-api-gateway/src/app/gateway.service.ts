import { Injectable } from '@nestjs/common';
import { Model } from '@inklens/common';

@Injectable()
export class GatewayService {
	getData(): Model.Message {
		return { message: 'Hello Gateway API' };
	}
}
