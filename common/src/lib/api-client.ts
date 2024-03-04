import { TagsApiClient } from '../';
import { ApiClientError } from '../error';

/**
 * Represents the API client for making requests to various endpoints.
 * This class implements the Singleton pattern to ensure only one instance is created.
 */
export class ApiClient {
	/**
	 * The singleton instance of the ApiClient.
	 * @private
	 */
	private static instance: ApiClient;

	/**
	 * The client for interacting with the tags API endpoints.
	 * @private
	 */
	public tags: TagsApiClient;

	constructor() {
		this.tags = new TagsApiClient();
	}

	/**
	 * The base URL for the API, retrieved from environment variables.
	 * @private
	 */
	private baseUrl = process.env['NEXT_PUBLIC_INKLENS_API_URL_GATEWAY'];

	/**
	 * Gets the singleton instance of the ApiClient.
	 * If the instance does not exist, it is created.
	 * @returns {ApiClient} The singleton instance of the ApiClient.
	 */
	static getInstance(): ApiClient {
		if (!ApiClient.instance) {
			ApiClient.instance = new ApiClient();
		}
		return ApiClient.instance;
	}

	/**
	 * Makes an HTTP request to the specified API endpoint.
	 * @param {string} endpoint The endpoint to request, appended to the base URL.
	 * @param {RequestInit} [options] The options for the fetch request.
	 * @returns {Promise<T>} A promise that resolves to the response data as type T.
	 * @throws {ApiClientError} Throws an ApiClientError if the request fails or an error occurs.
	 */
	public async request<T>(endpoint: string, options?: RequestInit): Promise<T> {
		try {
			const requestOptions = {
				headers: {
					'Content-Type': 'application/json',
				},
				...options,
			};
			const response = await fetch(`${this.baseUrl}/${endpoint}`, requestOptions);
			if (!response.ok) {
				throw new ApiClientError('Request failed', response.status);
			}
			return (await response.json()) as T;
		} catch (error: unknown) {
			if (error instanceof ApiClientError) {
				throw error;
			} else {
				throw new ApiClientError('Error making request');
			}
		}
	}
}
