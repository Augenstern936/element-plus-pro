/**
 * 校验值是否是一个组件
 * @param value
 * @returns
 */
export function checkValueIsComponent(v: Record<string, Function>): boolean {
	if (
		typeof v === 'object' &&
		typeof v != null &&
		(typeof v.render === 'function' || typeof v.setup === 'function')
	) {
		return true;
	}
	return false;
}

export function isOnlySymbols(str: string): boolean {
	return /[\s~`!@#$%^&*()\-_=+[\]{}|;；:：'",，。、【‘’】<.>/?？]/.test(str);
}
