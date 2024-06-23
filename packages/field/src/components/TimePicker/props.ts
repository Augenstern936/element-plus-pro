/*
 * @Description:
 * @Date: 2024-04-10 17:57:47
 * @LastEditTime: 2024-06-22 19:47:03
 */
import type { TimePickerDefaultProps } from 'element-plus';
import type { CSSProperties } from 'vue';
import { ProFieldMode } from '../../typing';

export interface BaseTimePickerProps extends Partial<TimePickerDefaultProps> {
	mode?: ProFieldMode;
	style?: CSSProperties;
}

export type ProFieldTimeProps = Omit<BaseTimePickerProps, 'isRange'>;

export type ProFieldTimeRangeProps = Omit<BaseTimePickerProps, 'isRange'>;
