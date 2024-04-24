/*
 * @Description:
 * @Date: 2024-04-10 17:30:49
 * @LastEditTime: 2024-04-24 14:05:13
 */
import type { App, Component, FunctionalComponent } from "vue";
import { version } from "./version";

const markInstaller = (components: Record<string, Component | FunctionalComponent>) => {
	const install = (app: App) => {
		for (const key in components) {
			app.component(key, components[key]);
		}
	};

	return {
		version: version["@element-plus/pro-components"],
		install,
	};
};

export default markInstaller;
