import { Injectable, NotFoundException } from '@nestjs/common';
import { Model } from '@inklens/common';

@Injectable()
export class ProductsService {
	//
	private products: Model.Product[] = [
		{
			id: 0,
			name: 'Product 1',
			slug: '/product1',
			categories: [{ id: 1, name: 'Category 2', slug: '/category2' }],
			tags: [
				{ id: 1, name: 'Tag 2', slug: '/tag2' },
				{ id: 2, name: 'Tag 3', slug: '/tag3' },
			],
		},
		{
			id: 1,
			name: 'Product 2',
			slug: '/product2',
			categories: [
				{ id: 1, name: 'Category 2', slug: '/category2' },
				{ id: 2, name: 'Category 3', slug: '/category3' },
			],
			tags: [{ id: 2, name: 'Tag 3', slug: '/tag3' }],
		},
		{
			id: 2,
			name: 'Product 3',
			slug: '/product3',
			categories: [
				{ id: 0, name: 'Category 1', slug: '/category1' },
				{ id: 1, name: 'Category 2', slug: '/category2' },
			],
			tags: [
				{ id: 1, name: 'Tag 2', slug: '/tag2' },
				{ id: 0, name: 'Tag 1', slug: '/tag1' },
			],
		},
	];

	/**
	 * Retrieves all categories.
	 * @returns {Promise<Model.Product[]>} An array of product objects.
	 */
	public async list(): Promise<Model.Product[]> {
		return this.products;
	}

	/**
	 * Retrieves a product by its ID.
	 * @param {string} id The ID of the product to retrieve.
	 * @returns {Promise<Model.Tag>} The product object if found.
	 * @throws {NotFoundException} If no product is found with the given ID.
	 */
	public async getById(id: string): Promise<Model.Product> {
		const product = this.products.find((product) => product.id.toString() === id);
		if (!product) {
			throw new NotFoundException(`Product with ID ${id} not found`);
		}
		return product;
	}

	/**
	 * Creates a new product.
	 * @param {Model.Product} data The data of the product to create.
	 * @returns {Promise<Model.Product>} The created product object.
	 */
	public async create(data: Model.Product): Promise<Model.Product> {
		const newTag = { ...data, id: this.products.length };
		this.products.push(newTag);
		return newTag;
	}

	/**
	 * Updates an existing product.
	 * @param {string} id The ID of the product to update.
	 * @param {Model.Product} data The updated data for the product.
	 * @returns {Promise<Model.Product>} The updated product object.
	 * @throws {NotFoundException} If no product is found with the given ID.
	 */
	public async update(id: string, data: Model.Product): Promise<Model.Product> {
		const index = this.products.findIndex((product) => product.id.toString() === id);
		if (index === -1) {
			throw new NotFoundException(`Product with ID ${id} not found`);
		}
		this.products[index] = { ...this.products[index], ...data };
		return this.products[index];
	}

	/**
	 * Deletes a product by its ID.
	 * @param {string} id The ID of the product to delete.
	 * @returns {Promise<void>}
	 * @throws {NotFoundException} If no product is found with the given ID.
	 */
	public async delete(id: string): Promise<void> {
		const index = this.products.findIndex((product) => product.id.toString() === id);
		if (index === -1) {
			throw new NotFoundException(`Product with ID ${id} not found`);
		}
		this.products.splice(index, 1);
	}
}
