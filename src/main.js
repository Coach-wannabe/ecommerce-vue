import { createApp } from 'vue';
import App from './App.vue';
import vuetify from './plugins/vuetify'; 
import router from './router';
import store from './store';
import './assets/styles.css';
import '@mdi/font/css/materialdesignicons.css';

createApp(App)
  .use(router)
  .use(store)
  .use(vuetify) 
  .mount('#app');
