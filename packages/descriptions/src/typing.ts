/*
 * @Description:
 * @Date: 2024-04-30 17:42:23
 * @LastEditTime: 2024-06-03 00:55:55
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
	titleMark: {
		type: Object as PropType<TitleMark>,
	},
	items: {
		type: Array as PropType<ProDescriptionsItems>,
		required: true,
		default: [[{}]],
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
	text?: string;
	textStyle?: CSSProperties;
	mark?: TitleMark;
};

type TitleMark =
	| boolean
	| {
			color?: string;
			shape?: 'bar' | MarkShape;
	  };

export type ProDescriptionsTitle = string | TitleJsonConfig | (string | TitleJsonConfig)[];

export type ProDescriptionsItems = ProDescriptionsItem[] | ProDescriptionsItem[][];

export type ProDescriptionsItem = {
	label: string;
	span?: number;
	dataField?: string;
	copyable?: boolean;
	render?: (data: Record<string, any>) => JSX.Element;
};

export type ProDescriptionsProps = GeneratePropTypes<typeof proDescriptionProps>;
