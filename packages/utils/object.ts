/*
 * @Description:
 * @Date: 2024-07-15 16:43:09
 * @LastEditTime: 2024-07-15 16:49:43
 */
export function excludeObjectProperty(entity: Record<string, any>, keys: string[]) {
	const keysToExclude = new Set(keys);
	return Object.keys(entity).reduce((acc: Record<string, any>, key) => {
		if (!keysToExclude.has(key)) {
			acc[key] = entity[key];
		}
		return acc;
	}, {});
}
