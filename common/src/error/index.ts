/**
 * Represents an error that occurs during API requests.
 * This class extends the built-in Error class with an optional status code.
 */
export class ApiClientError extends Error {
	/**
	 * Creates an instance of ApiClientError.
	 * @param {string} message The error message.
	 * @param {number} [status] The HTTP status code or other error code associated with the error.
	 */
	constructor(message: string, public status?: number) {
		super(message);
		this.name = 'ApiClientError'; // Overrides the name property of the base Error class.
		this.status = status; // Sets the status code of the error, if provided.
	}
}
