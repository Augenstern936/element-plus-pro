import type { App, Plugin } from '@vue/runtime-core';
import pkg from './package.json';

export const markInstaller = (components: Record<string, any>) => {

    const version = pkg.version;

    //const install = (app: App) => components.forEach(com => app.use(com));
    const install = (app: App) => {
        for (const key in components) {
            app.component(key, components[key]);
        }
    }

    return {
        version,
        install
    }
}