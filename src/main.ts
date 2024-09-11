import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { setupStore } from './store'


const setupApp = async () => {
  const app = createApp(App)

  // 挂载 pinia store
  setupStore(app)

  return app
}

setupApp()
