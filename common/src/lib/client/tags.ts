import { Model } from '../..';
import { ApiClientBase } from './base';

/**
 * The TagsApiClient provides methods to interact with the tags endpoints.
 * It extends the ApiClient to utilize the common request functionality.
 */
export class TagsApiClient extends ApiClientBase<Model.Tag> {
	constructor() {
		super('tags');
	}
}
