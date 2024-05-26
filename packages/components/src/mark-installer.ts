/*
 * @Description:
 * @Date: 2024-04-10 17:30:49
 * @LastEditTime: 2024-05-26 11:21:32
 */
import type { App, FunctionalComponent } from 'vue';
import { version } from './version';

const markInstaller = (components: Record<string, any>) => {
	const install = (app: App) => {
		for (const key in components) {
			app.component(key, components[key] as FunctionalComponent);
		}
	};

	return {
		version: version['@element-plus/pro-components'],
		install,
	};
};

export default markInstaller;
