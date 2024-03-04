'use client';
import React from 'react';
import { ApiClient, Error, Model } from '@inklens/common';
import { Button } from '@inklens/ui';

async function fetchCategories(): Promise<Model.Category[]> {
	const api = ApiClient.getInstance();
	const categories = await api.categories.list();
	return categories;
}

export const Categories: React.FC = () => {
	//
	const [loading, setLoading] = React.useState<boolean>(false);
	const [error, setError] = React.useState<Error.ApiClientError | null>(null);
	const [data, setData] = React.useState<Model.Tag[]>([]);

	const handleClick = React.useCallback(async () => {
		setLoading(true);
		await fetchCategories()
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
						<li key={item.id}>{item.name}</li>
					))}
				</ul>
			) : null}
			{error ? <p className="text-red-500">{error.message}</p> : null}
		</>
	);
};
