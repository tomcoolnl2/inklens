import { nxE2EPreset } from '@nx/cypress/plugins/cypress-preset';

import { defineConfig } from 'cypress';

export default defineConfig({
	e2e: {
		...nxE2EPreset(__filename, {
			cypressDir: 'src',
			webServerCommands: { default: 'nx run inklens-app-web:start' },
			ciWebServerCommand: 'nx run inklens-app-web:serve-static',
		}),
		baseUrl: 'http://localhost:3000',
	},
});
