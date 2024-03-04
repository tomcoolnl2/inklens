//
export type Message = {
	message: string;
};

export type ApiClientType = 'tags' | 'categories';

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
