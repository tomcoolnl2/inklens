import { Injectable, NotFoundException } from '@nestjs/common';
import { Model } from '@inklens/common';

@Injectable()
export class CategoriesService {
	//
	private categories: Model.Category[] = [
		{ id: 0, name: 'Category 1', slug: '/category1' },
		{ id: 1, name: 'Category 2', slug: '/category2' },
		{ id: 2, name: 'Category 3', slug: '/category3' },
	];
	/**
	 * Retrieves all categories.
	 * @returns {Promise<Model.Category[]>} An array of category objects.
	 */
	public async list(): Promise<Model.Category[]> {
		return this.categories;
	}

	/**
	 * Retrieves a category by its ID.
	 * @param {string} id The ID of the category to retrieve.
	 * @returns {Promise<Model.Tag>} The category object if found.
	 * @throws {NotFoundException} If no category is found with the given ID.
	 */
	public async getById(id: string): Promise<Model.Category> {
		const category = this.categories.find((category) => category.id.toString() === id);
		if (!category) {
			throw new NotFoundException(`Category with ID ${id} not found`);
		}
		return category;
	}

	/**
	 * Creates a new category.
	 * @param {Model.Category} data The data of the category to create.
	 * @returns {Promise<Model.Category>} The created category object.
	 */
	public async create(data: Model.Category): Promise<Model.Category> {
		const newTag = { ...data, id: this.categories.length };
		this.categories.push(newTag);
		return newTag;
	}

	/**
	 * Updates an existing category.
	 * @param {string} id The ID of the category to update.
	 * @param {Model.Category} data The updated data for the category.
	 * @returns {Promise<Model.Category>} The updated category object.
	 * @throws {NotFoundException} If no category is found with the given ID.
	 */
	public async update(id: string, data: Model.Category): Promise<Model.Category> {
		const index = this.categories.findIndex((category) => category.id.toString() === id);
		if (index === -1) {
			throw new NotFoundException(`Category with ID ${id} not found`);
		}
		this.categories[index] = { ...this.categories[index], ...data };
		return this.categories[index];
	}

	/**
	 * Deletes a category by its ID.
	 * @param {string} id The ID of the category to delete.
	 * @returns {Promise<void>}
	 * @throws {NotFoundException} If no category is found with the given ID.
	 */
	public async delete(id: string): Promise<void> {
		const index = this.categories.findIndex((category) => category.id.toString() === id);
		if (index === -1) {
			throw new NotFoundException(`Category with ID ${id} not found`);
		}
		this.categories.splice(index, 1);
	}
}
