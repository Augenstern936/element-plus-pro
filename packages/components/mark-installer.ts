import type { App, Plugin } from '@vue/runtime-core';

export const markInstaller = (components: Plugin[] = []) => {

    const version = require('./package.json').version;

    const install = (app: App) => components.forEach(com => app.use(com));

    return {
        version,
        install
    }
}