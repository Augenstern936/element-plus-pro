/**
 * 校验值是否是一个组件
 * @param value
 * @returns
 */
export function checkValueIsComponent(value: any): boolean {
	if (
		typeof value === 'object' &&
		typeof value != null &&
		(typeof value.render === 'function' || typeof value.setup === 'function')
	) {
		return true;
	}
	return false;
}

export function isOnlySymbols(str: string): boolean {
	return /[\s~`!@#$%^&*()\-_=+[\]{}|;；:：'",，。、【‘’】<.>/?？]/.test(str);
}
