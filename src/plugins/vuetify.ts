import type { App } from "vue"
import { createVuetify } from 'vuetify'

export const setupVuetify = (app: App) => {
  const vuetify = createVuetify()
  app.use(vuetify)
}
