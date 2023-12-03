import Vue from '@vitejs/plugin-vue';
import VueJsx from '@vitejs/plugin-vue-jsx';
import { defineConfig, loadEnv } from 'vite';

export default defineConfig(async ({ mode }) => {
    const env = loadEnv(mode, process.cwd());

    return {
        server: {
            host: true,
            https: !!env.https,
        },
        plugins: [Vue(), VueJsx({})],
    };
});
