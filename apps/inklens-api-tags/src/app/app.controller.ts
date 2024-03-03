import { Body, Controller, Get, Post, Put, Param, Delete, HttpStatus, HttpCode } from '@nestjs/common';
import { AppService } from './app.service';
import { Model } from '@inklens/common';

/**
 * Controller for handling tag operations.
 */
@Controller('tags')
export class AppController {
	/**
	 * Constructs the AppController instance.
	 * @param {AppService} appService The service handling business logic for tags.
	 */
	constructor(private readonly appService: AppService) {}

	/**
	 * Retrieves all tags.
	 * @returns {Promise<Model.Tag[]>} A promise that resolves with the list of all tags.
	 */
	@Get()
	public async getAllTags(): Promise<Model.Tag[]> {
		return await this.appService.getAllTags();
	}

	/**
	 * Retrieves a specific tag by its ID.
	 * @param {string} tagId The ID of the tag to retrieve.
	 * @returns {Promise<Model.Tag>} A promise that resolves with the details of the specified tag.
	 */
	@Get(':tagId')
	public async getTagById(@Param('tagId') tagId: string): Promise<Model.Tag> {
		return await this.appService.getTagById(tagId);
	}

	/**
	 * Creates a new tag.
	 * @param {Model.Tag} tagData The data for the new tag.
	 * @returns {Promise<Model.Tag>} A promise that resolves with the details of the created tag.
	 */
	@Post()
	@HttpCode(HttpStatus.CREATED)
	public async createTag(@Body() tagData: Model.Tag): Promise<Model.Tag> {
		return await this.appService.createTag(tagData);
	}

	/**
	 * Updates an existing tag.
	 * @param {string} tagId The ID of the tag to update.
	 * @param {Model.Tag} tagData The updated data for the tag.
	 * @returns {Promise<Model.Tag>} A promise that resolves with the updated tag details.
	 */
	@Put(':tagId')
	public async updateTag(@Param('tagId') tagId: string, @Body() tagData: Model.Tag): Promise<Model.Tag> {
		return await this.appService.updateTag(tagId, tagData);
	}

	/**
	 * Deletes a tag by its ID.
	 * @param {string} tagId The ID of the tag to be deleted.
	 * @returns {Promise<void>} A promise that resolves when the tag is successfully deleted.
	 */
	@Delete(':tagId')
	@HttpCode(HttpStatus.NO_CONTENT)
	public async deleteTag(@Param('tagId') tagId: string): Promise<void> {
		return this.appService.deleteTag(tagId);
	}
}
