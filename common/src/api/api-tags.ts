import { ApiClient } from '../lib/api-client';
import { Tag } from '../model';

/**
 * The TagsApiClient provides methods to interact with the tags endpoints.
 * It extends the ApiClient to utilize the common request functionality.
 */
export class TagsApiClient extends ApiClient {
	/**
	 * Fetches all tags from the server.
	 * @returns {Promise<Tag[]>} A promise that resolves to an array of Tag objects.
	 */
	async getAllTags(): Promise<Tag[]> {
		return this.request<Tag[]>('tags');
	}

	/**
	 * Fetches a single tag by its ID.
	 * @param {string} tagId The ID of the tag to retrieve.
	 * @returns {Promise<Tag>} A promise that resolves to the Tag object.
	 */
	async getTagById(tagId: string): Promise<Tag> {
		return this.request<Tag>(`tags/${tagId}`);
	}

	/**
	 * Creates a new tag on the server with the provided tag data.
	 * @param {Tag} tagData The data for the new tag.
	 * @returns {Promise<Tag>} A promise that resolves to the created Tag object.
	 */
	async createTag(tagData: Tag): Promise<Tag> {
		return this.request<Tag>('tags', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(tagData),
		});
	}

	/**
	 * Updates an existing tag on the server with the provided tag data.
	 * @param {string} tagId The ID of the tag to update.
	 * @param {Tag} tagData The new data for the tag.
	 * @returns {Promise<Tag>} A promise that resolves to the updated Tag object.
	 */
	async updateTag(tagId: string, tagData: Tag): Promise<Tag> {
		return this.request<Tag>(`tags/${tagId}`, {
			method: 'PUT',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(tagData),
		});
	}

	/**
	 * Deletes a tag from the server by its ID.
	 * @param {string} tagId The ID of the tag to delete.
	 * @returns {Promise<void>} A promise that resolves when the tag is successfully deleted.
	 */
	async deleteTag(tagId: string): Promise<void> {
		return this.request<void>(`tags/${tagId}`, {
			method: 'DELETE',
		});
	}
}
