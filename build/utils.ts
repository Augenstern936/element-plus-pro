export function toGreatHump(str: string) {
	return str
		.replace(/^\w/g, (match) => {
			return match.toUpperCase();
		})
		.replace(/-(\w)/g, ($0, $1) => {
			return $1.toUpperCase();
		});
}

export function getDevDependencies(dir: string) {}
