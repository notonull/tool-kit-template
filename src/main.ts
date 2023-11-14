import { createApp } from 'vue'
import App from './App.vue'
import './style.css'
import router from './router'
import axios from './utils/http/axios'
const app = createApp(App);
// 全局ctx(this) 上挂载 $axios
app.config.globalProperties.$api = axios
//use router
app.use(router)
app.mount('#app');
