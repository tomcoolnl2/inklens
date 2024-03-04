'use client';
import React from 'react';
import { ApiClient, Error, Model } from '@inklens/common';
import { Button } from '@inklens/ui';

async function fetchProducts(): Promise<Model.Product[]> {
	const api = ApiClient.getInstance();
	const categories = await api.products.list();
	return categories;
}

export const Products: React.FC = () => {
	//
	const [loading, setLoading] = React.useState<boolean>(false);
	const [error, setError] = React.useState<Error.ApiClientError | null>(null);
	const [data, setData] = React.useState<Model.Product[]>([]);

	const handleClick = React.useCallback(async () => {
		setLoading(true);
		await fetchProducts()
			.then((data) => {
				setData(data);
			})
			.catch((error: Error.ApiClientError) => {
				setError(error);
			})
			.finally(() => {
				setLoading(false);
			});
	}, []);

	return (
		<>
			<Button onClick={handleClick}>Get Categories</Button>
			{loading ? <p>Loading...</p> : null}
			{data ? (
				<ul>
					{data.map((item) => (
						<li key={item.id}>
							<h2>{item.name}</h2>
							{item.categories?.length ? (
								<>
									<h3>Categories:</h3>
									<ul>
										{item.categories.map((category) => (
											<li key={category.id}>{category.name}</li>
										))}
									</ul>
								</>
							) : null}
							{item.tags?.length ? (
								<>
									<h3>tags:</h3>
									<ul>
										{item.tags.map((tag) => (
											<li key={tag.id}>{tag.name}</li>
										))}
									</ul>
								</>
							) : null}
						</li>
					))}
				</ul>
			) : null}
			{error ? <p className="text-red-500">{error.message}</p> : null}
		</>
	);
};
