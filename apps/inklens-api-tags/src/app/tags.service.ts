import { Injectable, NotFoundException } from '@nestjs/common';
import { Model } from '@inklens/common';

@Injectable()
export class TagsService {
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
	public async list(): Promise<Model.Tag[]> {
		return this.tags;
	}

	/**
	 * Retrieves a tag by its ID.
	 * @param {string} id The ID of the tag to retrieve.
	 * @returns {Promise<Model.Tag>} The tag object if found.
	 * @throws {NotFoundException} If no tag is found with the given ID.
	 */
	public async getById(id: string): Promise<Model.Tag> {
		const tag = this.tags.find((tag) => tag.id.toString() === id);
		if (!tag) {
			throw new NotFoundException(`Tag with ID ${id} not found`);
		}
		return tag;
	}

	/**
	 * Creates a new tag.
	 * @param {Model.Tag} data The data of the tag to create.
	 * @returns {Promise<Model.Tag>} The created tag object.
	 */
	public async create(data: Model.Tag): Promise<Model.Tag> {
		const newTag = { ...data, id: this.tags.length };
		this.tags.push(newTag);
		return newTag;
	}

	/**
	 * Updates an existing tag.
	 * @param {string} id The ID of the tag to update.
	 * @param {Model.Tag} data The updated data for the tag.
	 * @returns {Promise<Model.Tag>} The updated tag object.
	 * @throws {NotFoundException} If no tag is found with the given ID.
	 */
	public async update(id: string, data: Model.Tag): Promise<Model.Tag> {
		const index = this.tags.findIndex((tag) => tag.id.toString() === id);
		if (index === -1) {
			throw new NotFoundException(`Tag with ID ${id} not found`);
		}
		this.tags[index] = { ...this.tags[index], ...data };
		return this.tags[index];
	}

	/**
	 * Deletes a tag by its ID.
	 * @param {string} id The ID of the tag to delete.
	 * @returns {Promise<void>}
	 * @throws {NotFoundException} If no tag is found with the given ID.
	 */
	public async delete(id: string): Promise<void> {
		const index = this.tags.findIndex((tag) => tag.id.toString() === id);
		if (index === -1) {
			throw new NotFoundException(`Tag with ID ${id} not found`);
		}
		this.tags.splice(index, 1);
	}
}
