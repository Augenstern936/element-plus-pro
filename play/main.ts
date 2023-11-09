import { createApp } from "vue";
import App from "./src/App.vue";
import ElementPlusPro from "@element-plus/pro-components";

const app = createApp(App);

app.use(ElementPlusPro);

app.mount("#play");
