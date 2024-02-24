import { version } from './version';
import type { App, Component } from 'vue';

const markInstaller = (components: Record<string, Component>) => {
	const install = (app: App) => {
		for (const key in components) {
			app.component(key, components[key]);
		}
	};

	return {
		version: version['@element-plus/pro-components'],
		install,
	};
};

export default markInstaller;
