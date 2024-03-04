import { ApiClient } from '../..';
import { ApiClientType } from '../model';

export interface ApiBase {
	readonly endpoint: string;
}
/**
 * The TagsApiClient provides methods to interact with the tags endpoints.
 * It extends the ApiClient to utilize the common request functionality.
 */
export abstract class ApiClientBase<T> implements ApiBase {
	/**
	 * @contructor
	 * @param {ApiClientType} endpoint
	 */
	constructor(readonly endpoint: ApiClientType) {}

	/**
	 * Fetches all T from the server.
	 * @returns {Promise<T[]>} A promise that resolves to an array of T objects.
	 */
	async list(): Promise<T[]> {
		return ApiClient.getInstance().request<T[]>(this.endpoint);
	}

	/**
	 * Fetches a single tag by its ID.
	 * @param {string} id The ID of the tag to retrieve.
	 * @returns {Promise<T>} A promise that resolves to the T object.
	 */
	async getById(id: string): Promise<T> {
		return ApiClient.getInstance().request<T>(`${this.endpoint}/${id}`);
	}

	/**
	 * Creates a new T on the server with the provided T data.
	 * @param {T} data The data for the new T.
	 * @returns {Promise<T>} A promise that resolves to the created T object.
	 */
	async create(data: T): Promise<T> {
		return ApiClient.getInstance().request<T>(this.endpoint, {
			method: 'POST',
			body: JSON.stringify(data),
		});
	}

	/**
	 * Updates an existing tag on the server with the provided tag data.
	 * @param {string} id The ID of the tag to update.
	 * @param {T} data The new data for the tag.
	 * @returns {Promise<T>} A promise that resolves to the updated Tag object.
	 */
	async update(id: string, data: T): Promise<T> {
		return ApiClient.getInstance().request<T>(`${this.endpoint}/${id}`, {
			method: 'PUT',
			body: JSON.stringify(data),
		});
	}

	/**
	 * Deletes a tag from the server by its ID.
	 * @param {string} id The ID of the tag to delete.
	 * @returns {Promise<void>} A promise that resolves when the tag is successfully deleted.
	 */
	async delete(id: string): Promise<void> {
		return ApiClient.getInstance().request<void>(`${this.endpoint}/${id}`, {
			method: 'DELETE',
		});
	}
}
