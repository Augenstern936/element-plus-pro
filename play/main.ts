/*
 * @Description:
 * @Author: wangbowen936926
 * @Date: 2023-11-10 00:34:25
 * @LastEditTime: 2024-07-07 16:39:01
 * @FilePath: \element-plus-pro\play\main.ts
 */
import ElemntPlus from 'element-plus';
import { createApp } from 'vue';
import App from './src/App.vue';

const app = createApp(App);

app.use(ElemntPlus);
app.mount('#play');
