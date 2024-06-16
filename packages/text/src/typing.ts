/*
 * @Description:
 * @Date: 2024-04-30 17:42:23
 * @LastEditTime: 2024-06-15 23:48:05
 */
import { textProps } from 'element-plus';
import { GeneratePropTypes } from '@element-plus/pro-types';

export const proTextProps = {
	...textProps,
} as const;

export type ProTextProps = GeneratePropTypes<typeof proTextProps>;
