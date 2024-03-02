//
export class ApiClientError extends Error {
	constructor(message: string, public status?: number) {
		super(message);
		this.name = 'ApiClientError';
		this.status = status;
	}
}

export class ApiClient {
	private static instance: ApiClient;

	private baseUrl = process.env['NEXT_PUBLIC_INKLENS_API_URL_GATEWAY'];

	static getInstance(): ApiClient {
		if (!ApiClient.instance) {
			ApiClient.instance = new ApiClient();
		}
		return ApiClient.instance;
	}

	public async request<T>(endpoint = '', options?: RequestInit): Promise<T> {
		try {
			console.log(this.baseUrl, process.env);
			const response = await fetch(`${this.baseUrl}/${endpoint}`, options);
			if (!response.ok) {
				throw new ApiClientError('Request failed', response.status);
			}
			return (await response.json()) as T;
		} catch (error: unknown) {
			if (error instanceof ApiClientError) {
				throw error;
			} else {
				throw new ApiClientError('Error making request');
			}
		}
	}

	// public users = {
	// 	getAllUsers: async () => {
	// 		return this.request<User[]>('users');
	// 	},
	// 	getUserById: async (userId: number) => {
	// 		return this.request<User>(`users/${userId}`);
	// 	},
	// };
}
