// https://vitepress.dev/guide/custom-theme
import { h } from 'vue';
import type { Theme } from 'vitepress';
import DefaultTheme from 'vitepress/theme';
import ElementPlus from 'element-plus';
import ProComponents from '@element-plus/pro-components';
import { globals } from '../vitepress';
import '@ruabick/vitepress-demo-block/dist/style.css';
import './style.css';

export default {
	extends: DefaultTheme,
	Layout: () => {
		return h(DefaultTheme.Layout, null, {
			// https://vitepress.dev/guide/extending-default-theme#layout-slots
		});
	},
	enhanceApp({ app, router, siteData }) {
		app.use(ElementPlus as any);
		app.use(ProComponents as any);
		globals.forEach(([name, Comp]) => {
			app.component(name, Comp as any);
		});
	},
} satisfies Theme;
