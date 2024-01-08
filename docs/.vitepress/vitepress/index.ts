import VPDemo from './components/vp-demo.vue';
import DemoBlock from '@ruabick/vitepress-demo-block';

import type { Component } from 'vue';

export const globals: [string, Component][] = [
	//['Demo', VPDemo]
	['Demo', DemoBlock],
];
