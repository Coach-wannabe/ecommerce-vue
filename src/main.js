import { createApp } from 'vue';
import App from './App.vue';
import vuetify from './plugins/vuetify'; // Make sure this is the correct path
import router from './router';
import store from './store';
import './assets/styles.css';

createApp(App)
  .use(router)
  .use(store)
  .use(vuetify) // Use Vuetify
  .mount('#app');
