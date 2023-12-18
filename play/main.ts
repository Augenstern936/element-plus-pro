import ElementPlusPro from '@element-plus/pro-components';
// import ElementPlus from 'element-plus';
// import 'element-plus/theme-chalk/index.css';

import { ProTabs } from '@element-plus/pro-components';

import { createApp } from 'vue';
import App from './src/App.vue';

const app = createApp(App);

//app.use(ElementPlusPro);
// app.use(ElementPlus);
app.use(ProTabs);
// app.use(ProTable);

app.mount('#play');
