import { CssUnitEnum } from './types';

/**
 *
 * @param val
 * @param cssUnit
 * @returns
 */
export function toCssUnitValue(val: number | string, unit: keyof typeof CssUnitEnum = 'px'): string {
	const strVal = String(val || 0);
	const newVal = strVal[0] == '0' ? '0' : strVal.slice(0, 2) == '-0' ? '-0' : strVal;
	const typeErrorTip = 'The first parameter type of the function toCssUnitValue is not a string number';
	const isHasUnit = Object.keys(CssUnitEnum)
		.filter((v) => Number.isNaN(Number(v)))
		.some((cssUnit) => {
			const valUnit = newVal.slice(newVal.length - cssUnit.length);
			const value = newVal.slice(0, newVal.length - cssUnit.length);
			if (valUnit === cssUnit && (!value || Number.isNaN(Number(value)))) {
				throw new TypeError(typeErrorTip);
			}
			return valUnit === cssUnit;
		});
	if (!isHasUnit) {
		if (Number.isNaN(Number(newVal))) {
			throw new TypeError(typeErrorTip);
		}
		return `${newVal}${unit}`;
	}

	return newVal;
}

export function toOptions(valueEnum: Record<string | number, string | number | { text: string; [x: string]: any }>) {
	const options = Object.keys(valueEnum).map((key) => {
		const item = valueEnum[key];
		const type = Object.prototype.toString.call(item);
		const label = typeof item == 'object' && type === '[object Object]' ? item.text : item;
		return {
			label: label,
			value: key,
		};
	});
	return options;
}

export function toEnum(options: { label: string; value: string | number | boolean }[]) {
	return options.reduce((acc: Record<string, any>, cur: any) => {
		acc[cur.value] = cur.label;
		return acc;
	}, {});
}
