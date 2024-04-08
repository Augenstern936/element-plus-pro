/*
 * @Description:
 * @Author: wangbowen936926
 * @Date: 2023-11-10 00:34:23
 * @LastEditTime: 2024-04-08 02:14:48
 * @FilePath: \element-plus-pro\packages\button\src\typing.ts
 */
import type { ButtonProps } from 'element-plus';

export interface ProButtonProps extends Partial<ButtonProps> {
	// 二次确认提示语
	tip?: string | TipConfig;
	render?: string;
}

export interface TipConfig {
	mode?: 'message-box' | 'popconfirm';
	text: string;
	before?: () => boolean;
}
