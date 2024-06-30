/*
 * @Description:
 * @Author: wangbowen936926
 * @Date: 2023-11-10 00:34:23
 * @LastEditTime: 2024-06-02 12:59:18
 * @FilePath: \element-plus-pro\packages\button\src\typing.ts
 */
import type { ButtonProps, MessageOptions, PopconfirmProps } from 'element-plus';

export interface ProButtonProps extends Partial<ButtonProps> {
	// 二次确认提示语
	tip?: string | TipConfig;
	title?: string;
}

export type TipConfig = (MessageBoxConfig | PopconfirmConfig) & {
	text: string;
	before?: () => boolean;
};

export interface MessageBoxConfig extends Partial<Omit<MessageOptions, 'message'>> {
	mode: 'message-box';
	title?: string;
}

export interface PopconfirmConfig extends Partial<Omit<PopconfirmProps, 'title'>> {
	mode: 'popconfirm';
}
