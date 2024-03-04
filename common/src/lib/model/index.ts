//
export type Message = {
	message: string;
};

export type ApiClientType = 'tags' | 'categories' | 'products';

export type Tag = {
	id: number;
	name: string;
	slug: string;
};

export type Category = {
	id: number;
	name: string;
	slug: string;
};

export type Product = {
	id: number;
	name: string;
	slug: string;
	categories: Category[];
	tags: Tag[];
};
