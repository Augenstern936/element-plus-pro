/*
 * @Description:
 * @Date: 2024-04-30 17:42:23
 * @LastEditTime: 2024-06-04 23:13:44
 */
import { descriptionProps } from 'element-plus';
import { GeneratePropTypes, MarkShape } from '@element-plus/pro-types';
import type { PropType } from 'vue';
import { CSSProperties } from 'vue';
import { JSX } from 'vue/jsx-runtime';

export const proDescriptionProps = {
	...descriptionProps,
	gap: {
		type: Number,
	},
	title: {
		type: [String, Object, Array] as PropType<ProDescriptionsTitle>,
	},
	items: {
		type: Array as PropType<ProDescriptionsItems>,
		required: true,
	},
	data: {
		type: Object as PropType<{ [x: string]: any }>,
	},
	emptyText: {
		type: String,
	},
	labelStyle: {
		type: Object as PropType<CSSProperties>,
	},
	bodyStyle: {
		type: Object as PropType<CSSProperties>,
	},
} as const;

export type TitleJsonConfig = {
	text: string | string[];
	textStyle?: CSSProperties;
	mark?: boolean | TitleMark;
};

export type TitleMark = {
	color?: string;
	shape?: 'bar' | MarkShape;
};

export type ProDescriptionsTitle = string | TitleJsonConfig | Array<string>;

export type ProDescriptionsItems = ProDescriptionsItem[] | ProDescriptionsItem[][];

export type ProDescriptionsItem = {
	label: string;
	span?: number;
	dataField?: string;
	copyable?: boolean;
	render?: (data: Record<string, any>) => JSX.Element;
};

export type ProDescriptionsProps = GeneratePropTypes<typeof proDescriptionProps>;
