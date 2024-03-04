import { Injectable, NotFoundException } from '@nestjs/common';
import { Model } from '@inklens/common';

@Injectable()
export class AppService {
	//
	private tags: Model.Tag[] = [
		{ id: 0, name: 'Tag 1', slug: '/tag1' },
		{ id: 1, name: 'Tag 2', slug: '/tag2' },
		{ id: 2, name: 'Tag 3', slug: '/tag3' },
	];

	/**
	 * Retrieves all tags.
	 * @returns {Promise<Model.Tag[]>} An array of tag objects.
	 */
	public async getAllTags(): Promise<Model.Tag[]> {
		return this.tags;
	}

	/**
	 * Retrieves a tag by its ID.
	 * @param {string} tagId The ID of the tag to retrieve.
	 * @returns {Promise<Model.Tag>} The tag object if found.
	 * @throws {NotFoundException} If no tag is found with the given ID.
	 */
	public async getTagById(tagId: string): Promise<Model.Tag> {
		const tag = this.tags.find((tag) => tag.id.toString() === tagId);
		if (!tag) {
			throw new NotFoundException(`Tag with ID ${tagId} not found`);
		}
		return tag;
	}

	/**
	 * Creates a new tag.
	 * @param {Model.Tag} tagData The data of the tag to create.
	 * @returns {Promise<Model.Tag>} The created tag object.
	 */
	public async createTag(tagData: Model.Tag): Promise<Model.Tag> {
		const newTag = { ...tagData, id: this.tags.length };
		this.tags.push(newTag);
		return newTag;
	}

	/**
	 * Updates an existing tag.
	 * @param {string} tagId The ID of the tag to update.
	 * @param {Model.Tag} tagData The updated data for the tag.
	 * @returns {Promise<Model.Tag>} The updated tag object.
	 * @throws {NotFoundException} If no tag is found with the given ID.
	 */
	public async updateTag(tagId: string, tagData: Model.Tag): Promise<Model.Tag> {
		const index = this.tags.findIndex((tag) => tag.id.toString() === tagId);
		if (index === -1) {
			throw new NotFoundException(`Tag with ID ${tagId} not found`);
		}
		this.tags[index] = { ...this.tags[index], ...tagData };
		return this.tags[index];
	}

	/**
	 * Deletes a tag by its ID.
	 * @param {string} tagId The ID of the tag to delete.
	 * @returns {Promise<void>}
	 * @throws {NotFoundException} If no tag is found with the given ID.
	 */
	public async deleteTag(tagId: string): Promise<void> {
		const index = this.tags.findIndex((tag) => tag.id.toString() === tagId);
		if (index === -1) {
			throw new NotFoundException(`Tag with ID ${tagId} not found`);
		}
		this.tags.splice(index, 1);
	}
}
