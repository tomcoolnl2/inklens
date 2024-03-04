import { ApiClient, Model } from '../';

/**
 * The TagsApiClient provides methods to interact with the tags endpoints.
 * It extends the ApiClient to utilize the common request functionality.
 */
export class TagsApiClient {
	/**
	 * Fetches all tags from the server.
	 * @returns {Promise<Model.Tag[]>} A promise that resolves to an array of Tag objects.
	 */
	async getAllTags(): Promise<Model.Tag[]> {
		return ApiClient.getInstance().request<Model.Tag[]>('tags');
	}

	/**
	 * Fetches a single tag by its ID.
	 * @param {string} tagId The ID of the tag to retrieve.
	 * @returns {Promise<Tag>} A promise that resolves to the Tag object.
	 */
	async getTagById(tagId: string): Promise<Model.Tag> {
		return ApiClient.getInstance().request<Model.Tag>(`tags/${tagId}`);
	}

	/**
	 * Creates a new tag on the server with the provided tag data.
	 * @param {Model.Tag} tagData The data for the new tag.
	 * @returns {Promise<Model.Tag>} A promise that resolves to the created Tag object.
	 */
	async createTag(tagData: Model.Tag): Promise<Model.Tag> {
		return ApiClient.getInstance().request<Model.Tag>('tags', {
			method: 'POST',
			body: JSON.stringify(tagData),
		});
	}

	/**
	 * Updates an existing tag on the server with the provided tag data.
	 * @param {string} tagId The ID of the tag to update.
	 * @param {Model.Tag} tagData The new data for the tag.
	 * @returns {Promise<Model.Tag>} A promise that resolves to the updated Tag object.
	 */
	async updateTag(tagId: string, tagData: Model.Tag): Promise<Model.Tag> {
		return ApiClient.getInstance().request<Model.Tag>(`tags/${tagId}`, {
			method: 'PUT',
			body: JSON.stringify(tagData),
		});
	}

	/**
	 * Deletes a tag from the server by its ID.
	 * @param {string} tagId The ID of the tag to delete.
	 * @returns {Promise<void>} A promise that resolves when the tag is successfully deleted.
	 */
	async deleteTag(tagId: string): Promise<void> {
		return ApiClient.getInstance().request<void>(`tags/${tagId}`, {
			method: 'DELETE',
		});
	}
}
