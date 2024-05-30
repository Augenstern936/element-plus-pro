/*
 * @Description:
 * @Author: wangbowen936926
 * @Date: 2023-11-10 00:34:25
 * @LastEditTime: 2024-05-30 23:57:25
 * @FilePath: \element-plus-pro\play\main.ts
 */
import { createApp } from 'vue';
import App from './src/App.vue';
import ElemntPlus from 'element-plus';

const app = createApp(App);

app.use(ElemntPlus);
app.mount('#play');
