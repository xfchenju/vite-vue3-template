/*
 * @Description:
 * @Author: chenju
 * @Date: 2021-05-26 09:58:50
 * @LastEditors: chenju
 * @LastEditTime: 2021-05-26 13:57:33
 */
import { createApp } from 'vue';
import App from './App.vue';
// normalize.css
import 'normalize.css/normalize.css';
// vue-router
import router from '@/router';
// vuex
import store from '@/store';

const app = createApp(App);
app.use(router);
app.use(store);
app.mount('#app');
