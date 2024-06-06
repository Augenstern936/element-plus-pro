/*
 * @Description:
 * @Date: 2024-04-15 10:48:08
 * @LastEditTime: 2024-06-06 22:21:02
 */
import { imageProps } from 'element-plus';
import { CSSProperties, ExtractPropTypes, PropType } from 'vue';

export const proFieldImageProps = {
	...imageProps,
	mode: {
		type: String as PropType<'read' | 'edit'>,
		default: 'edit',
	},
	src: {
		type: [String, Array] as PropType<string | string[]>,
	},
	style: {
		type: Object as PropType<CSSProperties>,
		default: {},
	},
};

export type ProFieldImageProps = Partial<ExtractPropTypes<typeof proFieldImageProps>>;
