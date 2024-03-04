import { Body, Controller, Get, Post, Put, Param, Delete, HttpStatus, HttpCode } from '@nestjs/common';
import { CategoriesService } from './categories.service';
import { Model } from '@inklens/common';

@Controller({ path: 'categories', version: '1' })
export class CategoriesController {
	//
	constructor(private readonly categoriesService: CategoriesService) {}

	/**
	 * Retrieves all tags.
	 * @returns {Promise<Model.Category[]>} A promise that resolves with the list of all categories.
	 */
	@Get()
	public async list(): Promise<Model.Category[]> {
		return await this.categoriesService.list();
	}

	/**
	 * Retrieves a specific category by its ID.
	 * @param {string} id The ID of the category to retrieve.
	 * @returns {Promise<Model.Category>} A promise that resolves with the details of the specified category.
	 */
	@Get(':id')
	public async getTagById(@Param('id') id: string): Promise<Model.Category> {
		return await this.categoriesService.getById(id);
	}

	/**
	 * Creates a new category.
	 * @param {Model.Category} data The data for the new category.
	 * @returns {Promise<Model.Category>} A promise that resolves with the details of the created category.
	 */
	@Post()
	@HttpCode(HttpStatus.CREATED)
	public async create(@Body() data: Model.Category): Promise<Model.Category> {
		return await this.categoriesService.create(data);
	}

	/**
	 * Updates an existing category.
	 * @param {string} id The ID of the category to update.
	 * @param {Model.Category} data The updated data for the category.
	 * @returns {Promise<Model.Category>} A promise that resolves with the updated category details.
	 */
	@Put(':id')
	public async update(@Param('id') id: string, @Body() data: Model.Category): Promise<Model.Category> {
		return await this.categoriesService.update(id, data);
	}

	/**
	 * Deletes a category by its ID.
	 * @param {string} id The ID of the category to be deleted.
	 * @returns {Promise<void>} A promise that resolves when the category is successfully deleted.
	 */
	@Delete(':id')
	@HttpCode(HttpStatus.NO_CONTENT)
	public async delete(@Param('id') id: string): Promise<void> {
		return this.categoriesService.delete(id);
	}
}
