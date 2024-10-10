/*
 * @Description:
 * @Author: wangbowen936926
 * @Date: 2023-11-10 00:34:25
 * @LastEditTime: 2024-10-09 21:52:54
 * @FilePath: \element-plus-pro\play\main.ts
 */
import ElemntPlus from "element-plus";
import { createApp } from "vue";
import App from "./src/App.vue";
// import "./src/mock";

const app = createApp(App);

app.use(ElemntPlus);
app.mount("#play");
