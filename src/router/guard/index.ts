import type { Router } from 'vue-router'

/**
 * 路由守卫函数
 * @param router - 路由实例
 */
export function createRouterGuard(router: Router) {
	/** 全局前置守卫 */
	router.beforeEach(() => {})

	/** 全局后置钩子 */

	router.afterEach(() => {})
}
