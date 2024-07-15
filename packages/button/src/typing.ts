/*
 * @Description:
 * @Author: wangbowen936926
 * @Date: 2023-11-10 00:34:23
 * @LastEditTime: 2024-07-15 21:35:33
 * @FilePath: \element-plus-pro\packages\button\src\typing.ts
 */
import type { ButtonProps, MessageOptions, PopconfirmProps } from 'element-plus';

export type ProButtonProps = Partial<ButtonProps> & {
	// 二次确认提示语
	tip?: string | TipConfig;
	title?: string;
};

export type TipConfig = (MessageBoxConfig | PopconfirmConfig) & {
	text: string;
	before?: () => boolean;
};

export type MessageBoxConfig = Partial<Omit<MessageOptions, 'message'>> & {
	mode: 'message-box';
	title?: string;
};

export type PopconfirmConfig = Partial<Omit<PopconfirmProps, 'title'>> & {
	mode: 'popconfirm';
};
