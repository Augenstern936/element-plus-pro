/*
 * @Description:
 * @Author: wangbowen936926
 * @Date: 2023-11-10 00:34:25
 * @LastEditTime: 2024-07-17 16:33:41
 * @FilePath: \element-plus-pro\play\main.ts
 */
import ElemntPlus from "element-plus";
import "element-plus/dist/index.css";
import { createApp } from "vue";
import App from "./src/App.vue";
// import "./src/mock";

const app = createApp(App);

app.use(ElemntPlus);
app.mount("#play");
