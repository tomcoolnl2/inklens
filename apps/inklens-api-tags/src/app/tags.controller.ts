import { Body, Controller, Get, Post, Put, Param, Delete, HttpStatus, HttpCode } from '@nestjs/common';
import { TagsService } from './tags.service';
import { Model } from '@inklens/common';

/**
 * Controller for handling tag operations.
 */
@Controller({ path: 'tags', version: '1' })
export class TagsController {
	/**
	 * Constructs the TagsController instance.
	 * @param {TagsService} tagsService The service handling business logic for tags.
	 */
	constructor(private readonly tagsService: TagsService) {}

	/**
	 * Retrieves all tags.
	 * @returns {Promise<Model.Tag[]>} A promise that resolves with the list of all tags.
	 */
	@Get()
	public async list(): Promise<Model.Tag[]> {
		return await this.tagsService.list();
	}

	/**
	 * Retrieves a specific tag by its ID.
	 * @param {string} id The ID of the tag to retrieve.
	 * @returns {Promise<Model.Tag>} A promise that resolves with the details of the specified tag.
	 */
	@Get(':id')
	public async getById(@Param('id') id: string): Promise<Model.Tag> {
		return await this.tagsService.getById(id);
	}

	/**
	 * Creates a new tag.
	 * @param {Model.Tag} data The data for the new tag.
	 * @returns {Promise<Model.Tag>} A promise that resolves with the details of the created tag.
	 */
	@Post()
	@HttpCode(HttpStatus.CREATED)
	public async create(@Body() data: Model.Tag): Promise<Model.Tag> {
		return await this.tagsService.create(data);
	}

	/**
	 * Updates an existing tag.
	 * @param {string} id The ID of the tag to update.
	 * @param {Model.Tag} data The updated data for the tag.
	 * @returns {Promise<Model.Tag>} A promise that resolves with the updated tag details.
	 */
	@Put(':id')
	public async update(@Param('id') id: string, @Body() data: Model.Tag): Promise<Model.Tag> {
		return await this.tagsService.update(id, data);
	}

	/**
	 * Deletes a tag by its ID.
	 * @param {string} id The ID of the tag to be deleted.
	 * @returns {Promise<void>} A promise that resolves when the tag is successfully deleted.
	 */
	@Delete(':id')
	@HttpCode(HttpStatus.NO_CONTENT)
	public async delete(@Param('id') id: string): Promise<void> {
		return this.tagsService.delete(id);
	}
}
