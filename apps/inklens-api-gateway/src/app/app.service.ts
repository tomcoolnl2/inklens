import { Injectable } from '@nestjs/common';
import { Model } from '@inklens/common';

@Injectable()
export class AppService {
	getData(): Model.Message {
		return { message: 'Hello Gateway API' };
	}
}
