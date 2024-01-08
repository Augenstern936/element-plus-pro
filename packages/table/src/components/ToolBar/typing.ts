import type { TableColumns } from '../../typing';

export type ToolBarProps = {
	title?: string;
	options?: boolean;
	columns: (TableColumns & { id: string })[];
};
