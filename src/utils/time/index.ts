// import { isObject, isString } from '/@/utils/is'

// const DATE_TIME_FORMAT = 'YYYY-MM-DD HH:mm'

/**
 * @description: 拼接时间戳
 */
export function joinTimestamp(join: boolean, restful = false): string | object {
	if (!join) {
		return restful ? '' : {}
	}
	const now = new Date().getTime()
	if (restful) {
		return `?_t=${now}`
	}
	return { _t: now }
}
