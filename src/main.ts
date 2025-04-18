import { createApp } from 'vue'
import App from './App.vue'
import { setupStore } from './store'
import { setupRouter } from './router'
import { setupStyle } from './styles'

const setupApp = async () => {
	const app = createApp(App)

	// 挂载 pinia store
	setupStore(app)

	// 挂载路由
	setupRouter(app)

	setupStyle()

	app.mount('#app')
}

setupApp()
