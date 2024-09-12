import type { App } from 'vue'
import { createPinia } from 'pinia'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'

export * from './modules'

export function setupStore(app: App) {
	const store = createPinia()

	// 添加 pinia store 可持久化插件
	store.use(piniaPluginPersistedstate)

	app.use(store)
}
