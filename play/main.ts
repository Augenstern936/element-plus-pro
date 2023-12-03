import ElementPlusPro from '@element-plus/pro-components';
import { createApp } from 'vue';
import App from './src/App.vue';

const app = createApp(App);

app.use(ElementPlusPro);

app.mount('#play');
