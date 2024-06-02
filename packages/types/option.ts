export type MarkShape = 'disc' | 'circle' | 'square' | 'disclosure-open' | 'disclosure-closed';

export type VModelOptionValue = string | number | boolean | (string | number | boolean)[];

export type ValueOption = {
	label: string;
	value: string | number | boolean;
	key?: string | number;
	status?: 'success' | 'error' | 'processing' | 'warning' | 'default';
	color?: string;
};

export type ValueEnum<T> = Record<string, string | (Omit<ValueOption, 'value'> & T)>;
