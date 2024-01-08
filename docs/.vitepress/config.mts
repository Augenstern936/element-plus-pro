import { defineConfig } from 'vitepress';
import { nav, sidebar } from './configs';
import { mdPlugin } from './configs/plugins';
import { applyPlugins } from '@ruabick/md-demo-plugins';

// https://vitepress.dev/reference/site-config
export default defineConfig({
	title: 'ProComponents',
	description: '基于Element Plus',
	themeConfig: {
		// https://vitepress.dev/reference/default-theme-config
		nav,
		sidebar,
		socialLinks: [{ icon: 'github', link: 'https://github.com/vuejs/vitepress' }],
		algolia: {
			appId: 'R2IYF7ETH7',
			apiKey: '599cec31baffa4868cae4e79f180729b',
			indexName: 'index',
		},
	},
	markdown: {
		//config: (md) => mdPlugin(md),
		config: (md) => applyPlugins(md),
	},
});
