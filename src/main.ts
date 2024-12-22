import {createApp} from 'vue'

//第一步：引用pinia
import { createPinia } from 'pinia'
import App from './App.vue'


//创建一个应用
const app = createApp(App)

//第二步：创建pinia，最好是在App创建完后创建pinia
const pinia = createPinia
//第三步：安装pinia
app.use(pinia)

//挂载整个应用到app容器中
app.mount('#app')