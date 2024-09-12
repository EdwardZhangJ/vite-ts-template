import type { App } from 'vue'
import type { RouteRecordRaw } from 'vue-router'
import { createRouter, createWebHistory } from 'vue-router'
import { createRouterGuard } from './guard/index'

const routes: RouteRecordRaw[] = [
	{
		path: '/',
		component: () => import('../view/index/index.vue'),
		name: 'index',
	},
]

export const router = createRouter({
	history: createWebHistory(''),
	routes,
})

export async function setupRouter(app: App) {
	app.use(router)
	createRouterGuard(router)
	await router.isReady()
}
