import type { App } from 'vue'
import { createPinia } from 'pinia'

export * from './modules'

export function setupStore(app: App) {
  const store = createPinia()
  // store.use(piniaPluginPersistedstate)

  app.use(store)
}

