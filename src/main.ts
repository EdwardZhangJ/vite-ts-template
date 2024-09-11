import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { setupStore } from './store'
import { setupRouter } from './router'
import { setupVuetify } from './plugins'


const setupApp = async () => {
  const app = createApp(App)

  // 挂载 vuetify 组件库
  setupVuetify(app)

  // 挂载 pinia store
  setupStore(app)

  // 挂载路由
  setupRouter(app)


  app.mount('#app')
}

setupApp()
