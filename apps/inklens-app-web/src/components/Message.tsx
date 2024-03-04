'use client';
import React from 'react';
import { ApiClient, Error, Model } from '@inklens/common';
import { Button } from '@inklens/ui';

async function fetchMessage(): Promise<Model.Message> {
	const api = ApiClient.getInstance();
	const message = await api.request<Model.Message>('');
	return message;
}

export const Message: React.FC = () => {
	//
	const [loading, setLoading] = React.useState<boolean>(false);
	const [error, setError] = React.useState<Error.ApiClientError | null>(null);
	const [message, setMessage] = React.useState<Model.Message>({ message: '' });

	const handleClick = React.useCallback(async () => {
		setLoading(true);
		await fetchMessage()
			.then((message) => {
				setMessage(message);
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
			<Button text="Get Message" onClick={handleClick} />
			{loading ? <p>Loading...</p> : null}
			{message.message ? <p>{message.message}</p> : null}
			{error ? <p className="text-red-500">{error.message}</p> : null}
		</>
	);
};
