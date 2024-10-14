/**
 * @description: 请求结果类型
 */
export enum ResultEnum {
	SUCCESS = 0,
	ERROR = 1,
	TIMEOUT = 401,
	TYPE = 'success',
}

/**
 * @description: 请求方法类型
 */
export enum RequestEnum {
	GET = 'GET',
	POST = 'POST',
	PUT = 'PUT',
	DELETE = 'DELETE',
}

/**
 * @description:  Content类型
 */
export enum ContentTypeEnum {
	// json
	JSON = 'application/json;charset=UTF-8',
	// form-data qs
	FORM_URLENCODED = 'application/x-www-form-urlencoded;charset=UTF-8',
	// form-data upload
	FORM_DATA = 'multipart/form-data;charset=UTF-8',
}

/**
 * @description:  请求头类型
 */
export enum ConfigEnum {
	// TOKEN
	TOKEN = 'X-Access-Token',
	// TIMESTAMP
	TIMESTAMP = 'X-TIMESTAMP',
}
