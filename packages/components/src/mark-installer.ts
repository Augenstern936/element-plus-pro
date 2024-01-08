import type { App, Component } from 'vue';

const markInstaller = (components: Record<string, Component>) => {
	const version = '0.0.1';

	const install = (app: App) => {
		for (const key in components) {
			app.component(key, components[key]);
		}
	};

	return {
		version,
		install,
	};
};

export default markInstaller;
