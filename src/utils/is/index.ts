export const isObject = (val: any): val is Record<string, any> => Object.prototype.toString.call(val) === '[object Object]'

export const isString = (val: unknown): val is string => typeof val === 'string'

export const isBoolean = (val: unknown): val is boolean => typeof val === 'boolean'

export const isFunction = (val: unknown): val is Function => typeof val === 'function'
