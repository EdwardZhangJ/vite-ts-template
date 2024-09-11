import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { setupStore } from './store'
import { setupRouter } from './router'


const setupApp = async () => {
  const app = createApp(App)

  // 挂载 pinia store
  setupStore(app)

  // 挂载路由
  setupRouter(app)

  app.mount('#app')
}

setupApp()
