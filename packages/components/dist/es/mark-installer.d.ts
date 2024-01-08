import type { App, Component } from 'vue';
declare const markInstaller: (components: Record<string, Component>) => {
    version: string;
    install: (app: App) => void;
};
export default markInstaller;
