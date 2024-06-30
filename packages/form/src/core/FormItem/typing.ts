/*
 * @Description:
 * @Author: wangbowen936926
 * @Date: 2024-06-27 21:16:50
 * @LastEditTime: 2024-06-27 21:30:46
 * @FilePath: \element-plus-pro\packages\form\src\core\FormItem\typing.ts
 */
import { FormItemProps } from 'element-plus';
import type { ProFieldType } from '@element-plus/pro-field';

export type ProFormItemProps = Omit<FormItemProps, 'prop' | 'label'> & {
	key?: string;
	label?: string | (() => JSX.Element);
	dataField?: string;
	readonly?: boolean;
	valueType?: ProFieldType;
	valueEnum?: ValueEnum;
	valueOptions?: ValueOption[];
	defaultValue?: string | number | boolean | any[];
	fieldProps?: Record<string, any>;
	hide?: boolean | FormItemPropertyFunction<boolean>;
	render?: () => JSX.Element;
};
