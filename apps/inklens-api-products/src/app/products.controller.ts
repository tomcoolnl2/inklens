import { Body, Controller, Get, Post, Put, Param, Delete, HttpStatus, HttpCode } from '@nestjs/common';
import { ProductsService } from './products.service';
import { Model } from '@inklens/common';

@Controller({ path: 'products', version: '1' })
export class ProductsController {
	constructor(private readonly productService: ProductsService) {}

	/**
	 * Retrieves all tags.
	 * @returns {Promise<Model.Product[]>} A promise that resolves with the list of all categories.
	 */
	@Get()
	public async list(): Promise<Model.Product[]> {
		return await this.productService.list();
	}

	/**
	 * Retrieves a specific category by its ID.
	 * @param {string} id The ID of the category to retrieve.
	 * @returns {Promise<Model.Product>} A promise that resolves with the details of the specified category.
	 */
	@Get(':id')
	public async getTagById(@Param('id') id: string): Promise<Model.Product> {
		return await this.productService.getById(id);
	}

	/**
	 * Creates a new category.
	 * @param {Model.Product} data The data for the new category.
	 * @returns {Promise<Model.Product>} A promise that resolves with the details of the created category.
	 */
	@Post()
	@HttpCode(HttpStatus.CREATED)
	public async create(@Body() data: Model.Product): Promise<Model.Product> {
		return await this.productService.create(data);
	}

	/**
	 * Updates an existing category.
	 * @param {string} id The ID of the category to update.
	 * @param {Model.Product} data The updated data for the category.
	 * @returns {Promise<Model.Product>} A promise that resolves with the updated category details.
	 */
	@Put(':id')
	public async update(@Param('id') id: string, @Body() data: Model.Product): Promise<Model.Product> {
		return await this.productService.update(id, data);
	}

	/**
	 * Deletes a category by its ID.
	 * @param {string} id The ID of the category to be deleted.
	 * @returns {Promise<void>} A promise that resolves when the category is successfully deleted.
	 */
	@Delete(':id')
	@HttpCode(HttpStatus.NO_CONTENT)
	public async delete(@Param('id') id: string): Promise<void> {
		return this.productService.delete(id);
	}
}
