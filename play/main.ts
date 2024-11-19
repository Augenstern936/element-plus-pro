/*
 * @Description:
 * @Author: <Haidu w936926@outlook.com>
 * @Date: 2023-11-10 00:34:25
 * @LastEditTime: 2024-11-15 15:20:53
 *
 */
import ElemntPlus from "element-plus";
import { createApp } from "vue";
import App from "./src/App.vue";
//import "element-plus/theme-chalk/index.css";
// import "./src/mock";

const app = createApp(App);

app.use(ElemntPlus);
app.mount("#play");
