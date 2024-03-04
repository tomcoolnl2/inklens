'use client';
import React from 'react';
import { ApiClient, Error, Model } from '@inklens/common';
import { Button } from '@inklens/ui';

async function fetchTags(): Promise<Model.Tag[]> {
	const api = ApiClient.getInstance();
	const message = await api.tags.getAllTags();
	return message;
}

export const Tags: React.FC = () => {
	//
	const [loading, setLoading] = React.useState<boolean>(false);
	const [error, setError] = React.useState<Error.ApiClientError | null>(null);
	const [tags, setTags] = React.useState<Model.Tag[]>([]);

	const handleClick = React.useCallback(async () => {
		setLoading(true);
		await fetchTags()
			.then((tags) => {
				setTags(tags);
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
			<Button onClick={handleClick}>Get Tags</Button>
			{loading ? <p>Loading...</p> : null}
			{tags ? (
				<ul>
					{tags.map((tag) => (
						<li key={tag.id}>{tag.name}</li>
					))}
				</ul>
			) : null}
			{error ? <p className="text-red-500">{error.message}</p> : null}
		</>
	);
};
